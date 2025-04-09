(()=>{
  const array = [1, 2, 3, 4, 5];
  // forEach는 배열의 각 요소에 대해 주어진 함수를 실행함
  // 이때, 각 요소의 값과 인덱스를 함께 사용할 수 있음
  // 주의할 점은 forEach는 새로운 배열을 반환하지 않음
  // 즉, forEach의 반환값은 undefined임
  const result = array.forEach((element, index) => {
    console.log(`Index: ${index}, Element: ${element}`);
  });

  // 따라서, 아래의 result는 undefined임
  console.log(`forEach의 반환값: ${result}`); // undefined
})()