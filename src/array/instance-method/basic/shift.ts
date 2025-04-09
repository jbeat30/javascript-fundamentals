(() => {
  const arr = [1, 2, 3, 4, 5];
  const shiftedElement = arr.shift();
  // shift는 배열의 첫 번째 요소를 제거하고 반환함

  console.log(`제거된 요소: ${shiftedElement}`); // 1
  console.log(`제거 후 배열: ${arr}`); // [2, 3, 4, 5]

  // 빈 배열에서 shift하면?
  const emptyArr: number[] = [];
  const result = emptyArr.shift();
  console.log(`빈 배열에서 shift한 결과: ${result}`); // undefined
})();