(() => {
  // Array.from()은 iterable한 객체를 배열로 변환하는 정적 메서드
  // 1. 문자열 → 배열
  const fromString = Array.from('heelo');
  // 문자열은 iterable 객체이므로 각 문자가 배열 요소로 분해됨
  console.log('문자열 → 배열:', fromString); // ['h', 'e', 'e', 'l', 'o']

  // 2. Set → 배열
  const fromSet = Array.from(new Set([1, 2, 3, 2, 1]));
  // Set은 중복을 허용하지 않는 iterable
  // Array.from으로 배열화하면 중복 없는 배열이 됨
  console.log('Set → 배열:', fromSet); // [1, 2, 3]

  // 3. Map → 배열
  const fromMap = Array.from(new Map([['a', 1], ['b', 2]]));
  // Map은 iterable한 [key, value] 쌍의 배열로 변환됨
  console.log('Map → 배열:', fromMap); // [['a', 1], ['b', 2]]

  // 4. NodeList → 배열 (브라우저 환경에서만 동작)
  // const nodeList = document.querySelectorAll('.item');
  // const nodesArr = Array.from(nodeList);
  // console.log('NodeList → 배열:', nodesArr);
  // NodeList는 iterable이므로 Array.from으로 배열 변환 가능
  // 위 코드는 브라우저에서만 실행됨 (Node.js에서는 오류)

  // 5. 두 번째 인자로 mapping 함수도 사용 가능
  const mappedArr = Array.from([1, 2, 3], x => x * 2);
  // Array.from은 두 번째 인자로 map 콜백을 받을 수 있음
  // 위의 경우: [1, 2, 3] → [2, 4, 6]
  console.log('map 함수 적용:', mappedArr); // [2, 4, 6]
})();
