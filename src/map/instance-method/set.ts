(() => {
  /*
    Map.prototype.set(key, value)
    - 주어진 key와 value 쌍을 Map에 저장함
    - 같은 key가 이미 존재할 경우, 해당 key의 값을 덮어씀
    - 메서드 체이닝 가능 (set 호출 후 반환값은 원래의 Map 객체)
  */

  const map = new Map();

  // set으로 값 추가
  map.set('a', 1);
  map.set('b', 2);

  console.log(map); // Map(2) { 'a' => 1, 'b' => 2 }

  // 같은 key에 대해 다시 set하면 기존 값을 덮어씀
  map.set('a', 99);
  console.log(map); // Map(2) { 'a' => 99, 'b' => 2 }

  // 메서드 체이닝 가능
  const chainedMap = new Map()
      .set('x', 10)
      .set('y', 20)
      .set('z', 30);

  console.log(chainedMap); // Map(3) { 'x' => 10, 'y' => 20, 'z' => 30 }
})();