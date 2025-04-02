# 🚀 JavaScript 배열 메서드

## 1. `sort` - 배열 정렬
`sort` 메서드는 배열을 정렬 비교 함수 `(a, b) => a - b`는 오름차순(작은 수 → 큰 수)을, `(a, b) => b - a`는 내림차순(큰 수 → 작은 수)을 구현 원본 배열이 변경됨.
```javascript
const numbers = [4, 2, 7, 1, 9];
numbers.sort((a, b) => a - b); // 오름차순 정렬
console.log(numbers); // [1, 2, 4, 7, 9]
numbers.sort((a, b) => b - a); // 내림차순 정렬
console.log(numbers); // [9, 7, 4, 2, 1]
```

## 2. `filter` - 조건에 맞는 요소 필터링
`filter` 메서드는 조건에 맞는 요소만 추출해 새 배열을 반환. `startsWith("a")`는 "a"로 시작하는 단어를, `endsWith("a")`는 "a"로 끝나는 단어를 필터링. 원본 배열은 변경되지 않음.
```javascript
const words = ["apple", "banana", "cherry", "avocado"];
const startFiltered = words.filter(word => word.startsWith("a"));
console.log(startFiltered); // ["apple", "avocado"]
const endFiltered = words.filter(word => word.endsWith("a"));
console.log(endFiltered); // ["banana", "avocado"]
```

## 3. `every` - 모든 요소가 조건을 만족하는지 확인
`every` 메서드는 배열의 모든 요소가 주어진 조건을 만족하면 `true`, 하나라도 만족하지 않으면 `false`를 반환. 여기서는 모든 점수가 80 이상이므로 `true`
```javascript
const scores = [90, 85, 88, 92];
const allPassed = scores.every(score => score >= 80);
console.log(allPassed); // true
```

## 4. `some` - 일부 요소가 조건을 만족하는지 확인
`some` 메서드는 배열에서 하나라도 조건을 만족하는 요소가 있으면 `true`, 모두 만족하지 않으면 `false`를 반환. 여기서는 짝수가 없으므로 `false`
```javascript
const nums = [1, 3, 7, 9];
const hasEven = nums.some(num => num % 2 === 0);
console.log(hasEven); // false
```

## 5. `find` - 조건에 맞는 첫 번째 요소 찾기
`find` 메서드는 조건을 만족하는 첫 번째 요소를 반환. 객체 배열에서 `id`가 2인 사용자를 찾아 해당 객체를 반환. 조건에 맞는 요소가 없으면 `undefined`가 반환.
```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bob" }
```

## 6. `findIndex` - 조건에 맞는 첫 번째 요소의 인덱스 찾기
`findIndex` 메서드는 조건을 만족하는 첫 번째 요소의 인덱스를 반환. 10보다 큰 첫 번째 숫자인 12의 인덱스(1)를 반환. 조건에 맞는 요소가 없으면 -1이 반환.
```javascript
const numbers2 = [5, 12, 8, 130, 44];
const index = numbers2.findIndex(num => num > 10);
console.log(index); // 1 (12의 인덱스)
```

## 7. `includes` - 배열에 특정 요소가 포함되어 있는지 확인
`includes` 메서드는 배열에 특정 값이 포함되어 있으면 `true`, 없으면 `false`를 반환. "banana"는 배열에 있지만 "mango"는 없으므로 각각 `true`와 `false`를 반환.
```javascript
const fruits = ["apple", "banana", "grape"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("mango"));  // false
```