# 🔁 Iteration Statements (반복문)

JavaScript의 반복문은 조건이 참인 동안 특정 코드를 반복적으로 실행할 수 있게 해주는 문법임  
각 반복문은 사용 목적과 상황에 따라 다르게 선택됨

---

## 1. `for`
- 지정된 횟수만큼 반복할 때 사용
- `초기식`, `조건식`, `증감식`으로 구성됨
- 배열의 인덱스를 순회하거나 반복 횟수를 제어할 때 적합
- 조건이 `false`가 되면 반복 종료

```javascript
// 👉 0부터 4까지 출력하는 반복문
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

---

## 2. `while`
- 조건이 참(`true`)인 동안 계속 반복
- 루프 시작 전에 조건을 먼저 평가
- 반복 횟수를 예측할 수 없을 때 자주 사용
- 조건이 처음부터 `false`면 한 번도 실행되지 않음

```javascript
// 👉 조건이 true일 동안 계속 반복
let count = 0;
while (count < 5) {
  console.log(count); // 0, 1, 2, 3, 4
  count++;
}
```

---

## 3. `do...while`
- 무조건 한 번 실행한 후, 조건을 평가해 반복 여부를 결정
- 사용자 입력처럼 **최소 한 번은 실행이 필요한 경우**에 적합
- 조건이 거짓(`false`)이어도 1회는 실행됨

```javascript
// 👉 무조건 한 번 실행한 후 조건 확인
let i = 0;
do {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
} while (i < 5);
```

---

## 4. `for...in`
- 객체의 **열거 가능한 속성(key)**을 순회함
- 배열보다 객체 순회에 적합
- 상속된 속성까지 순회하므로 `hasOwnProperty`로 필터링이 필요할 수 있음

```javascript
// 👉 객체의 키 반복
const user = { name: "Lee", age: 28 };
for (let key in user) {
  console.log(key, user[key]); // name Lee, age 28
}
```

---

## 5. `for...of`
- 배열, 문자열, Set, Map 등 **반복 가능한 객체(iterable)**를 순회함
- `value`를 바로 꺼내므로 `for...in`보다 배열에 더 적합
- 객체에는 사용 불가능 (에러 발생)

```javascript
// 👉 배열의 각 요소 출력
const arr = ["a", "b", "c"];
for (let value of arr) {
  console.log(value); // a, b, c
}
```

---

## ✅ 결론

| 반복문 종류       | 사용 목적                                  |
|------------------|--------------------------------------------|
| `for`            | 인덱스를 기반으로 횟수 제어가 필요한 경우      |
| `while`          | 조건이 참인 동안 반복 (횟수 불명확)           |
| `do...while`     | 무조건 1회 실행 후 반복 여부 결정              |
| `for...in`       | 객체의 속성(key) 순회                         |
| `for...of`       | 배열이나 반복 가능한 객체의 값(value) 순회     |
