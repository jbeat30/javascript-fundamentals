(() => {
  /*
    Map.prototype.keys()
    - Map에 저장된 key들만 순서대로 반환하는 이터레이터 객체를 반환함
  */

  const map = new Map([
    ['apple', 100],
    ['banana', 200],
    ['cherry', 300]
  ]);

  const keys = map.keys();

  console.log(keys.next().value); // 'apple'
  console.log(keys.next().value); // 'banana'

  // 전체 순회
  for (const key of map.keys()) {
    console.log(`key: ${key}`);
  }
})();