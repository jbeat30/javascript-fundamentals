const numbers = [4, 2, 7, 1, 9];
numbers.sort((a, b) => a - b); // 오름차순 정렬
console.log(numbers); // [1, 2, 4, 7, 9]
numbers.sort((a, b) => b - a); // 내림차순 정렬
console.log(numbers); // [9, 7, 4, 2, 1]


const words = ["apple", "banana", "cherry", "avocado"];
const startFiltered = words.filter(word => word.startsWith("a"));
console.log(startFiltered); // ["apple", "avocado"]
const endFiltered = words.filter(word => word.endsWith("a"));
console.log(endFiltered); // ["banana", "avocado"]

const scores = [90, 85, 88, 92];
const allPassed = scores.every(score => score >= 80);
console.log(allPassed); // true

const nums = [1, 3, 7, 9];
const hasEven = nums.some(num => num % 2 === 0);
console.log(hasEven); // false

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bob" }

const numbers2 = [5, 12, 8, 130, 44];
const index = numbers2.findIndex(num => num > 10);
console.log(index); // 1 (12의 인덱스)

const fruits = ["apple", "banana", "grape"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("mango"));  // false