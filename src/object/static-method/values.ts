(() => {
  const obj = { a: 1, b: 2, c: 3 };

  /*
    Object.values(obj)
    - 객체의 value(속성 값)만 추출하여 배열로 반환
    - key는 무시하고 value만 추출
    - 순서는 삽입 순서 유지

    변환 과정:
    1. 객체의 모든 key를 기준으로 순회
    2. 해당 key의 value를 추출
    3. 새 배열에 value만 담아서 반환

    예:
    입력:  { a: 1, b: 2, c: 3 }
    출력: [1, 2, 3]
  */
  const values = Object.values(obj);

  console.log(values); // Output: [1, 2, 3]
})();