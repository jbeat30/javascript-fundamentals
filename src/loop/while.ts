import { NumberArray, UserObject } from "../mockData";

/**
 * while 문은 조건이 true일 때 반복을 계속함
 * - 조건이 참인 동안 반복이 계속
 * - 배열 순회 시 인덱스를 활용하여 배열의 값에 접근
 * - 객체를 순회하려면 `Object.entries()`나 `Object.keys()`와 같은 메서드를 사용하여 배열로 변환 후 순회 가능
 * - `break`, `continue`를 사용할 수 있어 조건에 맞춰 반복을 제어할 수 있음
 *
 * 사용 시 주의점:
 * - 반복문을 종료할 조건을 정확히 설정해야 함
 * - 배열이나 반복 가능한 객체를 순회할 때 사용
 *
 * @example
 * let i = 0;
 * while (i < array.length) {
 *   console.log(array[i]); // 배열의 값 출력
 *   i++;
 * }
 */

// 배열을 순회할 때
let i = 0;
while (i < NumberArray.length) {
  if (NumberArray[i] === 5) {
    break; // 값이 5일 때 반복문을 종료
  }

  if (NumberArray[i] === 3) {
    i++; // 인덱스를 증가시키고, 값을 출력하지 않고 건너뛰기
    continue; // 현재 반복을 건너뛰고, 다음 반복으로 넘어감
  }

  console.log(`Array value: ${NumberArray[i]}`);
  i++;
}

// 객체를 순회할 때는 Object.entries()를 사용하여 배열로 변환 후 while 문 사용
const objectEntries = Object.entries(UserObject);
let j = 0;
while (j < objectEntries.length) {
  const [key, value] = objectEntries[j];
  console.log(`Object key: ${key}, value: ${value}`);
  j++;
}
