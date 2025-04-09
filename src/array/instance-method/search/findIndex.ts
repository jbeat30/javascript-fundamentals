(()=>{
  const arr = [1, 2, 3, 4, 5];
  const foundIndex = arr.findIndex((element) => element > 3);
  // findIndex는 조건을 만족하는 첫 번째 요소의 인덱스를 반환함
  // 여기서는 3의 인덱스인 3이 반환됨
  console.log(`조건을 만족하는 첫 번째 요소의 인덱스: ${foundIndex}`); // 3
})()