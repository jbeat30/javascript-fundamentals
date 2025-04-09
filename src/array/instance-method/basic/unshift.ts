(() => {
  const arr: number[] = [3, 4, 5];

  const newLength = arr.unshift(2);
  // unshift는 배열의 "맨 앞"에 요소를 추가하고, 추가된 후의 배열 길이를 반환함
  // 원래 [3, 4, 5]였던 배열이 -> [2, 3, 4, 5]로 바뀜
  // 반환값은 새 배열의 길이인 4
  console.log(`arr.unshift(2)의 반환값: ${newLength}`); // 4
  console.log(`unshift 후 배열: ${arr}`); // [2, 3, 4, 5]

  // 여러 개 한 번에 추가도 가능
  arr.unshift(0, 1);
  // [0, 1, 2, 3, 4, 5] 순서로 변경됨
  console.log(`여러 개 unshift 후 배열: ${arr}`); // [0, 1, 2, 3, 4, 5]

  // 배열 자체를 추가하면? (push 때처럼 중첩 배열이 생김)
  // arr 타입이 number[] 이므로, arr.unshift([ -1 ])는 오류 발생
  // arr.unshift([-1]); // ❌ Type error (number[] 에 number[] 넣을 수 없음)

  // spread 문법을 사용하면 안전하게 개별 숫자 요소로 추가 가능
  arr.unshift(...[-2, -1]);
  // [-2, -1, 0, 1, 2, 3, 4, 5]
  console.log(`spread로 unshift한 경우: ${arr}`);
})();