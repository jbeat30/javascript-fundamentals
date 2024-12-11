import { NumberArray, UserObject } from "../mockData";

/**
 * for...in 문
 * - 객체의 경우: key를 순회함
 * - 배열의 경우: index를 순회함
 *
 * for...in은 각 반복마다 새로운 블록 범위가 생성되기 때문에
 * 값변경 없을때는 변수 선언 시 `const`를 사용하는 것이 좋음
 *
 * 객체를 순회할 때 `for...in`을 사용하는 것이 더 직관적이고 유용함
 * 배열의 경우 `for...in`을 사용하는 것도 가능하지만,
 * 성능 측면에서 `for...of`를 사용하는 것이 더 효율적일 수 있음
 *
 * @example
 * for (const key in object) {
 *   console.log(key); // key 출력
 * }
 */

for (const arrayKey in NumberArray) {
  console.log(`Array index: ${arrayKey}`) // 배열의 인덱스(0,1,2,3) 출력
  console.log(`Array value: ${NumberArray[arrayKey]}`) // 배열의 값 출력
}

for (const objectKey in UserObject) {
  const key = objectKey as keyof typeof UserObject // 객체니깐 typeof로 타입을 가져온 뒤, 이를 keyof로 변환함
  console.log(`Object key: ${key}`) // 객체의 key 출력
  console.log(`Object value: ${UserObject[key]}`) // 객체의 value 출력
}