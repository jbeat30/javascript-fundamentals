(() => {
  const entries = [['a', 1], ['b', 2], ['c', 3]];

  /*
    Object.fromEntries(iterable)
    - [key, value] 형태의 2차원 배열을 객체로 변환함
    - 내부적으로 각 배열 요소를 순회하여 key-value를 할당
    - Object.entries()의 반대 개념

    변환 과정:
    1. 주어진 배열의 각 요소는 [key, value] 쌍임
    2. 각 쌍을 기반으로 객체의 속성으로 변환함
       - 'a' → 1, 'b' → 2, 'c' → 3
    3. 최종 객체 생성

    예:
    입력:  [['a', 1], ['b', 2], ['c', 3]]
    출력: { a: 1, b: 2, c: 3 }
  */
  const obj = Object.fromEntries(entries);

  console.log(obj); // Output: { a: 1, b: 2, c: 3 }
})();