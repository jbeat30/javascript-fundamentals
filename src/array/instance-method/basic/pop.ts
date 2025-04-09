(()=>{
  const array = [1, 2, 3, 4, 5];
  const result = array.pop();
  // pop은 배열의 마지막 요소를 제거하고 그 요소를 반환함
  // 즉, array.pop()을 호출하면 배열의 마지막 요소인 5가 제거되고 그 값이 result에 저장됨
  // array는 이제 [1, 2, 3, 4]가 됨
  // result는 5가 됨
  console.log(`pop()으로 제거된 요소: ${result}`); // pop()으로 제거된 요소: 5
  console.log(`pop() 호출 후 array: ${array}`); // pop() 호출 후 array: 1,2,3,4
  // pop()은 배열의 길이를 줄임
  // 즉, array.length는 4가 됨
  console.log(`pop() 호출 후 array.length: ${array.length}`); // pop() 호출 후 array.length: 4
  // pop()은 빈 배열에서 호출하면 undefined를 반환함
  // 즉, array가 빈 배열이라면 array.pop()은 undefined를 반환함
  const emptyArray: number[] = [];
  const result2 = emptyArray.pop();
  console.log(`빈 배열에서 pop() 호출: ${result2}`); // 빈 배열에서 pop() 호출: undefined
  console.log(`빈 배열의 길이: ${emptyArray.length}`); // 빈 배열의 길이: 0
})()