(() => {
  const obj = { a: 1, b: 2, c: 3 };

  /*
    Object.keys(obj)
    - 객체의 key(속성 이름)만 추출하여 배열로 반환
    - 반환된 key들은 모두 문자열
    - 순서는 삽입된 순서를 따름 (ES6 이상에서는 대부분 일관됨)

    변환 과정:
    1. 객체의 모든 key를 순회
    2. key만 추출하여 새 배열에 추가
    3. 배열로 반환

    예:
    입력:  { a: 1, b: 2, c: 3 }
    출력: ['a', 'b', 'c']
  */
  const keys = Object.keys(obj);

  console.log(keys); // Output: ['a', 'b', 'c']
})();