(()=>{
  // Array.of() 메서드는 주어진 인자를 사용하여 새로운 배열을 생성
  const singleElement = Array.of(5);
  // 단일 인자 5를 배열로 변환
  console.log(`Array.of(5): ${singleElement}`); // 결과: [5]

  const multipleElements = Array.of(1, 2, 3, 4, 5);
  // 여러 인자 1, 2, 3, 4, 5를 배열로 변환
  console.log(`Array.of(1, 2, 3, 4, 5): ${multipleElements}`); // 결과: [1, 2, 3, 4, 5]
})()