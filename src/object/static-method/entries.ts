(() => {
  const obj = { a: 1, b: 2, c: 3 };

  /*
    Object.entries(obj)
    - 객체의 각 속성을 [key, value] 쌍의 배열로 변환하여 반환함
    - 반환 결과는 2차원 배열이며, 배열 안의 각 요소는 [key, value] 구조임
    - key는 문자열이고, value는 해당 key에 대한 값

    변환 과정:
    1. 객체 obj의 각 속성을 순회함
    2. 각 속성을 [key, value] 형태로 추출
    3. 새로운 배열에 이 [key, value] 쌍을 순서대로 추가
    4. 최종적으로 2차원 배열 반환

    예:
    입력:  { a: 1, b: 2, c: 3 }
    출력: [['a', 1], ['b', 2], ['c', 3]]
  */
  const entries = Object.entries(obj);

  console.log(entries) // Output: [ ['a', 1], ['b', 2], ['c', 3] ]
})();