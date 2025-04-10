(() => {
  /*
    Map.prototype.get(key)
    - 주어진 key에 대응되는 value를 반환함
    - key가 존재하지 않으면 undefined 반환
    - key는 원시값 또는 객체 모두 가능
  */

  const map = new Map();

  // key-value 쌍 추가
  map.set('a', 100);
  map.set('b', 200);
  map.set(1, '숫자 키'); // 숫자도 key로 사용 가능
  const objKey = { id: 1 };
  map.set(objKey, '객체 키');

  // key로 value 가져오기
  console.log(map.get('a')); // 100
  console.log(map.get('b')); // 200
  console.log(map.get(1));   // '숫자 키'
  console.log(map.get(objKey)); // '객체 키'

  // 존재하지 않는 key 조회
  console.log(map.get('c')); // undefined → 없는 key는 undefined 반환

  // 주의: 객체를 key로 사용할 때는 참조 동일성 기준
  console.log(map.get({ id: 1 })); // undefined → 같은 구조여도 참조가 다르면 못 찾음
})();