(()=>{
  const arr = [1, 2, 3, 4, 5];
  const foundIndex = arr.indexOf(3);
  // indexOf는 특정 요소의 인덱스를 반환함
  // 여기서는 3의 인덱스인 2가 반환됨
  console.log(`특정 요소의 인덱스: ${foundIndex}`); // 2

  // 요소가 없으면 -1 반환
  const notFoundIndex = arr.indexOf(6);
  console.log(`존재하지 않는 요소의 인덱스: ${notFoundIndex}`); // -1
})()