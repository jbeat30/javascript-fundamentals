(()=>{
  const arr = [1, 2, 3, {name: '홍길동'}, 5];
  // filter는 주어진 조건을 만족하는 요소들로 새로운 배열을 만듦
  // 원본 배열은 변경되지 않음
  const numberFilter = arr.filter((item) => {
    // typeof item === 'number'인 요소들만 남김
    return typeof item === 'number';
  })

  // 결과: [1, 2, 3, 5]
  console.log(`filter의 결과: ${numberFilter}`); // [1, 2, 3, 5]
  // 원본 배열은 그대로임
  console.log(`원본 배열: ${arr}`); // [1, 2, 3, {name: '홍길동'}, 5]
})()