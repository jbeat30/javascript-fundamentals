(() => {
  /*
    Map.prototype.has(key)
    - 주어진 key가 Map에 존재하는지 여부를 boolean으로 반환함
    - key는 원시값 또는 객체 모두 가능
  */

  const map = new Map();
  map.set('x', 10);
  map.set('y', 20);

  const objKey = { name: 'test' };
  map.set(objKey, '객체 키');

  // 존재 여부 확인
  console.log(map.has('x')); // true
  console.log(map.has('z')); // false → 없는 key

  // 객체 key도 동일 참조일 때만 true
  console.log(map.has(objKey)); // true
  console.log(map.has({ name: 'test' })); // false → 참조 다르면 false
})();