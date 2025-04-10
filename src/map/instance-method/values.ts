(() => {
  /*
    Map.prototype.values()
    - Map에 저장된 value들만 순서대로 반환하는 이터레이터 객체를 반환함
  */

  const map = new Map();
  map.set('x', '엑스');
  map.set('y', '와이');
  map.set('z', '지');

  const values = map.values();

  console.log(values.next().value); // '엑스'
  console.log(values.next().value); // '와이'

  // 전체 순회
  for (const value of map.values()) {
    console.log(`value: ${value}`);
  }
})();