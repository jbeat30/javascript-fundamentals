import {NumberArray, UserObject} from "../mockData";

/**
 * for...of 문
 * - 배열의 경우: 요소의 값을 순차적으로 순회함
 *
 * for...of는 배열의 값을 직접 순회하기 때문에 인덱스를 사용할 필요가 없고,
 * 배열의 각 요소를 바로 사용할 수 있음
 * 객체를 순회할 때는 `for...in`을 사용하는 것이 더 직관적임
 *
 * @example
 * for (const value of array) {
 *   console.log(value); // 배열의 값 출력
 * }
 */

for (const arrayValue of NumberArray) {
  console.log(`Array value: ${arrayValue}`) // 배열의 값 출력
}
// 객체의 경우 for...of를 사용하려면 Object.entries()를 사용
for (const [key, value] of Object.entries(UserObject)) {
  console.log(`Object key: ${key}, value: ${value}`); // 객체의 키와 값 출력
}