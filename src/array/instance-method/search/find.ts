(()=>{
  const arr = [1, 2, 3, 4, 5];
  const foundElement = arr.find((element) => element > 3);
  // find는 조건을 만족하는 첫 번째 요소를 반환함
  // 여기서는 4가 조건을 만족하므로 반환됨
  console.log(`조건을 만족하는 첫 번째 요소: ${foundElement}`); // 4
})()