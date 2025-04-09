(()=>{
  const arr = [1, 2, 3, 4, 5];
  // some은 주어진 조건을 만족하는 요소가 하나라도 있는지 확인
  // 하나라도 있으면 true, 없으면 false
  const hasEvenNumber = arr.some((num) => num % 2 === 0);
  // 2와 4가 짝수이므로 true
  console.log(`some의 결과: ${hasEvenNumber}`); // true
  // 원본 배열은 그대로임
  console.log(`원본 배열: ${arr}`); // [1, 2, 3, 4, 5]
})()