export class MockedUserService {
  getUsers(): Observable<IUserQueryResult> {
    // 获得了 users$

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
    return users$.pipe(delay(2000)).pipe(tap(() => {
      // 停止进度刷新
      tickSubscription.unsubscribe();

      // 进度推至 100%
      progress$.next({ showProgressBar: true, progress: 1 });

      // 500 毫秒后关闭进度条
      timer(500).subscribe(() => {
        progress$.next({ showProgressBar: false });
      });
    }));
  }
}