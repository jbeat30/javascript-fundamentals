(()=>{
  const arr = [1, 2, 3, 4, 5];
  const includesResult = arr.includes(3);

  // includes는 배열에 특정 요소가 포함되어 있는지 확인함
  // 여기서는 3이 포함되어 있으므로 true가 반환됨
  console.log(`배열에 3이 포함되어 있는가? ${includesResult}`); // true
  // includes는 NaN도 포함 여부를 확인할 수 있음

  const nanArr = [1, 2, NaN];
  const includesNaN = nanArr.includes(NaN);
  // NaN은 자기 자신과 같지 않으므로, includes(NaN)도 true를 반환함
  console.log(`배열에 NaN이 포함되어 있는가? ${includesNaN}`); // true

  // includes는 배열의 길이가 0인 경우에도 사용 가능
  const emptyArr: number[] = [];
  const includesEmpty = emptyArr.includes(1);
  // 빈 배열에서 어떤 요소를 포함하고 있는지 확인하면 false가 반환됨
  console.log(`빈 배열에서 1이 포함되어 있는가? ${includesEmpty}`); // false

  const strArr = ['apple', 'banana', 'cherry'];
  const includesStr = strArr.includes('banana');
  // 문자열 배열에서도 includes 사용 가능
  // 여기서는 'banana'가 포함되어 있으므로 true가 반환됨
  console.log(`문자열 배열에서 'banana'가 포함되어 있는가? ${includesStr}`); // true
})()