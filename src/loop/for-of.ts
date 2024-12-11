import { NumberArray, UserObject } from "../mockData";

/**
 * for...of 문은 보통 `배열` 순회할 때 사용됨
 * - 배열의 값에 직접 접근하며, 인덱스가 필요 없을 때 유용
 * - 배열 외에도 `String`, `Map`, `Set` 등 반복 가능한 객체에 사용 가능
 * - `break`, `continue`를 사용할 수 있어 조건에 맞춰 반복을 제어할 수 있음
 *
 * 사용 시 주의점:
 * - 배열이나 반복 가능한 객체를 순회할 때 사용
 * - 객체를 순회하려면 `Object.entries()`나 `Object.keys()`와 같은 메서드를 사용하여 배열로 변환 후 순회 가능
 *
 * @example
 * for (const value of array) {
 *   console.log(value); // 배열의 값 출력
 * }
 */

for (const arrayValue of NumberArray) {
  console.log(`Array value: ${arrayValue}`);
}

// 객체를 순회할 때는 Object.entries()를 사용하여 배열로 변환 후 for...of 사용
for (const [key, value] of Object.entries(UserObject)) {
  console.log(`Object key: ${key}, value: ${value}`);
}
