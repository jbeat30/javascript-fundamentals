import { NumberArray, UserObject } from "../mockData";

/**
 * for...in 문은 `보통` 객체 순회할 때 사용됨
 * - 객체의 경우: `key`를 순회함
 * - 배열의 경우: `index`를 순회함
 * - `break`, `continue`를 사용할 수 있어 반복을 제어할 수 있음
 *
 * 사용 시 주의점:
 * - for...in은 각 반복마다 새로운 블록 범위가 생성되므로, 값 변경이 없을 때는 변수 선언 시 `const`를 사용하는 것이 좋음
 * - 객체를 순회할 때 `for...in`을 사용하는 것이 더 직관적이고 유용함
 * - 배열을 순회할 때 `for...in`을 사용할 수 있지만, 성능 측면에서는 `for...of`가 더 효율적일 수 있음
 *
 * @example
 * for (const key in object) {
 *   console.log(key); // 객체의 key 출력
 * }
 */

for (const arrayKey in NumberArray) {
  console.log(`Array index: ${arrayKey}`); // 배열의 인덱스(0, 1, 2, 3) 출력
  console.log(`Array value: ${NumberArray[arrayKey]}`); // 배열의 값 출력
}

for (const objectKey in UserObject) {
  const key = objectKey as keyof typeof UserObject; // 객체니깐 typeof로 타입을 가져온 뒤, 이를 keyof로 변환함
  console.log(`Object key: ${key}`); // 객체의 key 출력
  console.log(`Object value: ${UserObject[key]}`); // 객체의 value 출력
}
