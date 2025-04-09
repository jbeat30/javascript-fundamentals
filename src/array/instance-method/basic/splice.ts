(() => {
  const arr = [1, 2, 3, 4, 5];

  const removed = arr.splice(1, 2);
  // splice(start, deleteCount) -> start 인덱스부터 deleteCount만큼 삭제
  // index 1부터 2개 제거 -> [2, 3]이 삭제되어 반환됨
  // 원본 배열 자체가 변경됨

  console.log(`splice(1, 2)의 결과 (제거된 값): ${removed}`); // [2, 3]
  console.log(`splice 이후 배열 상태: ${arr}`); // [1, 4, 5]

  // 삭제 + 동시에 요소 삽입도 가능
  arr.splice(1, 1, 99, 100);
  // index 1부터 1개 제거 -> [1 ,3 ,4 ,5] -> [1, 99, 100, 5] -> 그 자리에 99, 100 삽입
  console.log(`splice로 삽입 후 배열: ${arr}`); // [1, 99, 100, 5]
})();
