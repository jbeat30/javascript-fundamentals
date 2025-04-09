(() => {
  // reverse()는 배열의 순서를 뒤집는 메서드
  const arr: number[] = [1, 2, 3, 4, 5];

  // reverse()는 배열의 순서를 뒤집음 (원본 배열 자체가 변경됨)
  arr.reverse();
  console.log(`reverse() 호출 후: ${arr}`); // [5, 4, 3, 2, 1]

  // 문자열 배열도 동일하게 작동함
  const strArr = ['a', 'b', 'c'];
  strArr.reverse();
  console.log(`문자열 배열 reverse(): ${strArr}`); // ['c', 'b', 'a']

  // reverse()는 원본 배열을 직접 수정하므로 주의 필요
  const original = [10, 20, 30];
  const reversed = [...original].reverse(); // 원본을 유지하려면 복사 후 reverse
  console.log(`원본 배열: ${original}`); // [10, 20, 30]
  console.log(`복사본 reverse(): ${reversed}`); // [30, 20, 10]
})();