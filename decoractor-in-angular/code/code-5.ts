/** 
 * 进度更新参数类型
 * 
 * @property {boolean} showProgressBar - 是否展示进度条
 * @property {number} progress - 进度（范围 [0, 1] 内的浮点数）
 */
type IProgressOption = { showProgressbar: boolean, progress: number }

/**
 * 进度更新装饰器，用在一个返回 Observable 的成员上
 * 
 * @param {number} estimatedDelayMS - 预估请求延迟（单位：毫秒）
 * @param {Subject<IProgressOption>} progress$ - 用于接受进度更新的 Subject
 */
function ProgressUpdateSimulation(
  estimatedDelayMS: number,
  progress$: Subject<IProgressOption>,
) {

  // 返回一个装饰器
  return (
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<ObservableFn>,
  ) => {
    const originalFn = descriptor.value;
    if (!originalFn) {
      return;
    }

    // 用新函数代替原来的旧函数，并且当新函数被调用时：
    descriptor.value = function (...args: any[]): Observable<any> {

      // 每 100 毫秒计算一次进度
      const tickPeriodMS = 100;

      // 预估一个请求需要 2 秒钟响应
      const estimatedResponseDelayMS = 2000;

      // 记录下开始请求时间点
      const startPoint = new Date().valueOf();

      // 记录下进度更新订阅，当请求完成后取关
      let tickSubscription = interval(tickPeriodMS).subscribe(() => {

        // 计算请求已经等待的时间
        const elapsed = new Date().valueOf() - startPoint;

        // 计算进度
        let progress = elapsed / estimatedResponseDelayMS;

        // 当进度条超过 0.9 后减慢速度
        if (progress > 0.9) {
          const slowFactor = 100;
          progress = progress + (progress - 0.9) / slowFactor;
        }

        // 如果估计时间小于实际时间则会出现这种情况
        if (progress > 1) {
          // 这时我们要将进度修正到正确值
          progress = 1;
        }

        // 广播进度条进度，好让组件接收到
        progress$.next({ showProgressBar: true, progress });
      })

      // 当请求完成时
      return originalFn.call(this, ...args).pipe(tap(() => {
        // 停止进度刷新
        tickSubscription.unsubscribe();
  
        // 进度推至 100%
        progress$.next({ showProgressBar: true, progress: 1 });

        // 500 毫秒后关闭进度条
        timer(500).subscribe(() => {
          progress$.next({ showProgressBar: false });
        });
      }));

    };
  };
}