(()=>{
  const array = [1, 2, 3, 4, 5];
  // map은 배열의 각 요소에 대해 주어진 함수를 실행하고,
  // 새로운 배열을 반환함
  // 원래 배열은 그대로 유지됨
  const newArray = array.map((element, index) => {
    console.log(`Index: ${index}, Element: ${element}`);
    return element * 2; // 각 요소를 2배로 변환
  });

  // newArray는 [2, 4, 6, 8, 10]이 됨
  console.log(`map의 반환값: ${newArray}`); // [2, 4, 6, 8, 10]
  // 원래 배열은 그대로 유지됨
  console.log(`원래 배열: ${array}`); // [1, 2, 3, 4, 5]
})()