(() => {
  /*
    Map.prototype.clear()
    - Map의 모든 요소를 제거함
    - size는 0이 되며, 모든 key-value 쌍이 삭제됨
    - 반환값은 없음 (undefined)
  */

  const map = new Map();
  map.set('x', 10);
  map.set('y', 20);
  map.set('z', 30);

  console.log(map.size); // 3 → 초기 상태

  // 전체 삭제
  map.clear();

  console.log(map.size); // 0 → 모든 요소가 제거됨
  console.log(map); // Map(0) {}
})();