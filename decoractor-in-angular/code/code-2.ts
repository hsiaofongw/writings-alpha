type ObservableFn<T> = (...args: any[]) => Observable<T>;

function IncreaseDelay<T>(delayMS: number) {
  return (
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<ObservableFn<T>>,
  ) => {
    const originalFn = descriptor.value as ObservableFn<T>;

    descriptor.value = function (...args: any[]): Observable<T> {
      return originalFn.call(this, ...args).pipe(delay(delayMS));
    };
  };
}
  