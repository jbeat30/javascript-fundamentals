(() => {
  /*
    Map.prototype.forEach(callbackFn, thisArg)
    - Map의 각 요소에 대해 callbackFn을 실행함
    - callbackFn은 (value, key, map) 순서로 인자를 받음
    - 두 번째 인자인 thisArg를 전달하면, callback 내부의 this로 사용됨
  */

  const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]);

  // 일반적인 순회
  map.forEach((value, key, mapRef) => {
    console.log(`key: ${key}, value: ${value}`);
    // mapRef === map → 항상 참
  });

  // thisArg 사용 예시
  const logger = {
    prefix: '[LOG]',
    print(value: number, key: string) {
      console.log(`${this.prefix} ${key} = ${value}`);
    }
  };

  map.forEach(function (this: typeof logger, value, key) {
    this.print(value, key);
  }, logger); // logger를 thisArg로 전달
})();