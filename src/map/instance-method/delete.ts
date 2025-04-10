(() => {
  /*
    Map.prototype.delete(key)
    - 주어진 key에 해당하는 항목을 Map에서 제거함
    - 제거에 성공하면 true, 실패하면 false 반환
    - key는 원시값 또는 객체 모두 가능
  */

  const map = new Map();
  map.set('a', 1);
  map.set('b', 2);

  const objKey = { key: 'obj' };
  map.set(objKey, '객체 값');

  // 삭제 전 상태
  console.log(map); // Map(3) { 'a' => 1, 'b' => 2, { key: 'obj' } => '객체 값' }

  // key 삭제
  console.log(map.delete('a')); // true → 삭제 성공
  console.log(map.delete('z')); // false → 없는 key는 삭제 실패

  // 객체 key도 참조가 같아야 삭제 가능
  console.log(map.delete({ key: 'obj' })); // false → 참조 다름
  console.log(map.delete(objKey)); // true → 삭제 성공

  // 삭제 후 확인
  console.log(map); // Map(1) { 'b' => 2 }
})();