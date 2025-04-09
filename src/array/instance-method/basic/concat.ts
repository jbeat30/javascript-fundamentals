(() => {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];
  const result = array1.concat(array2, array3);
  // concat은 여러 배열을 합쳐서 새로운 배열을 만듦
  // 즉, array1.concat(array2, array3) 호출 시
  // array1, array2, array3의 요소들이 하나의 배열로 합쳐짐
  // [1, 2, 3] + [4, 5, 6] + [7, 8, 9] -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // 원본 배열(array1, array2, array3)은 변하지 않음
  // 즉, concat은 원본 배열을 변경하지 않고 새로운 배열을 반환함
  console.log(`concat() 호출 후 array1: ${array1}`); // concat() 호출 후 array1: 1,2,3
  console.log(`concat() 호출 후 array2: ${array2}`); // concat() 호출 후 array2: 4,5,6
  console.log(`concat() 호출 후 array3: ${array3}`); // concat() 호출 후 array3: 7,8,9
  console.log(`concat() 호출 후 result: ${result}`); // concat() 호출 후 result: 1,2,3,4,5,6,7,8,9
})();