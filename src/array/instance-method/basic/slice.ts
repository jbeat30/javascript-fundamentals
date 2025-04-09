(() => {
  const arr = [10, 20, 30, 40, 50];

  const sliced = arr.slice(1, 4);
  // slice(start, end) -> start 인덱스부터 end "직전"까지 추출
  // 여기선 index 1 ~ 3 -> [20, 30, 40]이 복사되어 반환됨
  // 원본은 그대로 유지됨 (비파괴적)

  console.log(`slice(1, 4)의 결과: ${sliced}`); // [20, 30, 40]
  console.log(`slice 이후 원본 배열: ${arr}`); // [10, 20, 30, 40, 50]

  const firstThree = arr.slice(3);
  // slice(3) -> index 3부터 끝까지 복사
  // -> [40, 50] 복사됨
  console.log(`slice(3)의 결과: ${firstThree}`); // [40, 50]

  const lastTwo = arr.slice(-2);
  // 음수 인덱스 사용 가능 -> -2는 뒤에서 두 번째부터 끝까지
  // -> [40, 50] 복사됨
  console.log(`slice(-2)의 결과: ${lastTwo}`); // [40, 50]
})();
