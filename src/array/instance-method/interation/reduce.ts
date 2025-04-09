(()=>{
  const arr = [1,2,3,4,5];
  // reduce는 배열의 각 요소에 대해 주어진 함수를 실행하고,
  // 그 결과를 누적하여 단일 값으로 반환함
  // 이때, 초기값을 설정할 수 있음
  // 초기값이 없으면 배열의 첫 번째 요소가 초기값으로 사용됨
  const reduceResult = arr.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
  })

  console.log(`reduce의 최종 결과: ${reduceResult}`); // 15
})()