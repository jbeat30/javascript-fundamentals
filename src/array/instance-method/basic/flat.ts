(() => {
  const numberArr1 = [[1, 2], [3, 4], [5, 6]];
  const numberArr2 = [1, 2, [3, 4, [5, 6]]];

  // flat(): 배열을 한 단계 평탄화함 (중첩 배열을 한 단계 벗김)
  // numberArr1은 각 요소가 1단계 중첩된 배열이므로 flat(1) 적용 시 내부 배열의 요소들이 하나로 합쳐짐
  // [[1, 2], [3, 4], [5, 6]] -> [1, 2, 3, 4, 5, 6]
  const flatArr = numberArr1.flat();

  // numberArr2는 [1, 2, [3, 4, [5, 6]]] 구조로, 2단계 중첩이 있음
  // flat(1) 적용 시 가장 바깥 단계의 중첩만 풀림 -> [3, 4, [5, 6]] 중 [5, 6]은 그대로 남음
  // [1, 2, 3, 4, [5, 6]]
  const flatArr2 = numberArr2.flat();

  console.log(flatArr);   // [1, 2, 3, 4, 5, 6]
  console.log(flatArr2);  // [1, 2, 3, 4, [5, 6]]
})();