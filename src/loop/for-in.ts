import { NumberArray, UserObject } from "../mockData";

/**
 * `for...in` 문은 객체 또는 배열을 순회할 때 사용
 * - 객체: `key`를 순회함
 * - 배열: `index`를 순회함
 * - `break`, `continue`를 사용할 수 있어 반복 제어 가능
 *
 * ⚠️ 주의사항
 * - `for...in`은 새로운 블록 범위를 생성하므로, 값 변경이 없을 경우 `const` 사용 권장
 * - 배열 순회 시 성능 측면에서 `for...of` 또는 `Array.prototype.forEach`가 더 효율적일 수 있음
 */

// 배열 순회 (index를 key로 사용)
for (const index in NumberArray) {
  console.log(`Array index: ${index}`);
  console.log(`Array value: ${NumberArray[index]}`);
}

// 객체 순회 (key를 직접 사용)
for (const key in UserObject) {
  if (Object.prototype.hasOwnProperty.call(UserObject, key)) {
    console.log(`Object key: ${key}`);
    console.log(`Object value: ${UserObject[key as keyof typeof UserObject]}`);
  }
}