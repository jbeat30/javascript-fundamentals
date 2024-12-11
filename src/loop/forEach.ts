import { NumberArray, UserObject } from "../mockData";

/**
 * forEach 문은 `배열` 순회할 때 사용됨
 * - 배열의 각 요소와 인덱스를 자동으로 함수에 전달하여 실행
 * - 배열에만 사용 가능하며, `break`나 `continue`를 사용할 수 없음
 * - 조건문을 사용할 수 없고, 반환값이 없으므로 외부 상태를 변경하는 용도로 사용됨
 *
 * 사용 시 주의점:
 * - 배열을 순회할 때 유용하며, 반복 횟수나 조건을 설정할 수 없으므로 모든 요소를 처리해야 할 때 사용
 * - 객체를 순회하려면 `Object.entries()`나 `Object.keys()`와 같은 메서드를 사용하여 배열로 변환 후 순회 가능
 *
 * @example
 * NumberArray.forEach((item, index) => {
 *   console.log(`Item: ${item}, Index: ${index}`);
 * });
 */

NumberArray.forEach((item, index) => {
  console.log(`Item value: ${item}, Index: ${index}`);
});

// 객체를 순회할 때는 Object.entries()를 사용하여 배열로 변환 후 forEach 사용
Object.entries(UserObject).forEach(([key, value]) => {
  console.log(`Object key: ${key}, value: ${value}`);
});
