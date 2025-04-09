(() => {
  // sort() 메서드는 배열의 요소를 정렬하여 원본 배열을 변경함
  const arr: number[] = [4, 1, 10, 2, 5];

  // sort()는 기본적으로 요소를 문자열로 변환하여 정렬함 (유니코드 기준)
  arr.sort();
  // 숫자를 문자열로 비교: ['1', '10', '2', '4', '5']
  // 따라서 정렬 결과가 기대와 다를 수 있음
  console.log(`기본 sort() 결과: ${arr}`); // [1, 10, 2, 4, 5]

  // 숫자를 제대로 정렬하려면 비교 함수를 전달해야 함
  arr.sort((a, b) => a - b);
  // a - b가 음수면 a가 앞, 0이면 그대로, 양수면 b가 앞
  console.log(`숫자 오름차순 정렬: ${arr}`); // [1, 2, 4, 5, 10]

  // 내림차순 정렬도 가능
  arr.sort((a, b) => b - a);
  console.log(`숫자 내림차순 정렬: ${arr}`); // [10, 5, 4, 2, 1]

  // 문자열 배열도 유니코드 순으로 정렬됨
  // 대문자가 소문자보다 먼저 옴 (유니코드 기준)
  const strArr = ['banana', 'apple', 'Cherry'];
  strArr.sort();
  console.log(`문자열 정렬 (기본): ${strArr}`); // ['Cherry', 'apple', 'banana']

  // 대소문자 무시한 정렬 (localeCompare 사용)
  strArr.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
  console.log(`대소문자 무시 정렬: ${strArr}`); // ['apple', 'banana', 'Cherry']
})();