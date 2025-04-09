(()=>{
  const arr = [1, 2, 3, 4, 5];
  // every는 주어진 조건을 모든 요소가 만족하는지 확인
  // 모든 요소가 조건을 만족하면 true, 하나라도 아니면 false
  const isAllEven = arr.every((num) => num % 2 === 0);
  // 모든 요소가 짝수가 아니므로 false
  console.log(`every의 결과: ${isAllEven}`); // false
  // 원본 배열은 그대로임
  console.log(`원본 배열: ${arr}`); // [1, 2, 3, 4, 5]
})()