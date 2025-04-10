(() => {
  /*
    Map.prototype.entries()
    - Map의 [key, value] 쌍을 순서대로 반환하는 이터레이터 객체를 반환함
    - for...of, spread 등으로 순회 가능
    - 기본 이터레이터가 entries이기 때문에, 직접 호출하지 않아도 기본 순회 가능
  */

  const map = new Map();
  map.set('a', 1);
  map.set('b', 2);
  map.set('c', 3);

  const entries = map.entries();

  console.log(entries.next().value); // [ 'a', 1 ]
  console.log(entries.next().value); // [ 'b', 2 ]

  // 다시 처음부터 순회하고 싶다면 새로운 이터레이터를 생성해야 함
  for (const [key, value] of map.entries()) {
    console.log(`${key}: ${value}`);
  }

  // 기본 이터레이터이기 때문에 아래처럼 써도 동일하게 동작함
  for (const [key, value] of map) {
    console.log(`(기본 순회) ${key}: ${value}`);
  }
})();