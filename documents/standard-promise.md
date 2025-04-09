# 🚀 JavaScript Standard Promise & Async

### 비동기 프로그래밍이란?

JavaScript는 기본적으로 **동기적(Synchronous)** 언어로, 코드가 작성된 순서대로 실행됨  
하지만 시간이 오래 걸리는 작업(예: API 요청, 대용량 처리, 타이머 등)은  
다른 작업의 흐름을 **막지 않고** 동시에 처리되기를 원함 → 그래서 **비동기(Asynchronous)** 프로그래밍이 필요함

```javascript
// 동기 처리 예시
console.log("1. 시작");

function delaySync(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // 시간이 지날 때까지 빈 루프 (동기적 대기)
  }
}

delaySync(3000); // 3초 동안 코드 멈춤
console.log("2. 끝"); // 3초 후 출력됨

// 비동기 처리 예시
console.log("1. 시작");

setTimeout(() => {
  console.log("2. 3초 후 실행 (비동기)");
}, 3000);

console.log("3. 끝"); // 먼저 출력됨
```
> 🔍 위 예시에서, 동기 코드는 3초 동안 아무 작업도 못 하고 멈추지만
> 비동기 코드는 setTimeout()을 통해 3초 후 작업을 예약하고 다음 코드로 바로 넘어감
---

## 🔗 API란?

> **API (Application Programming Interface)**  
> 서로 다른 프로그램이 통신할 수 있게 도와주는 **인터페이스**로, 주로 서버에 데이터를 요청하거나 받을 때 사용됨

```javascript
// API 요청 예시 (JSONPlaceholder)
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => {
    console.log("✅ API로부터 받은 데이터:", data);
  })
  .catch((error) => {
    console.error("❌ 에러 발생:", error);
  });
```

---

## 📚 1. JavaScript Promise 생성 및 기본 구조

### ✅ `Promise`란?
비동기 작업의 결과를 나타내는 `객체`로, 작업이 완료되면 성공 또는 실패를 알려줌
3가지 상태를 가짐:

| 상태             | 설명                                           |
|----------------| ---------------------------------------------- |
| ⌛ `pending`    | 대기 상태 (아직 성공/실패가 결정되지 않음)     |
| 👌 `fulfilled` | 작업이 성공적으로 완료됨 (`resolve()` 호출됨) |
| ❌ `rejected`   | 작업이 실패함 (`reject()` 호출됨)             |

> 💡 **Promise 쉽게 이해하기**  
> 음식점 주문 번호표와 같음 - 주문(비동기 작업)을 하면 번호표(Promise)를 받고,   
> 음식(결과)이 완성되면 알려줌

### ✅ `Promise` 생성자

- `resolve(value)` : 작업 성공 시 호출
- `reject(reason)` : 작업 실패 시 호출

```javascript
const myPromise = new Promise((resolve, reject) => {
  // 비동기 작업 시작
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("🎉 작업 성공!");  // 성공한 경우 → resolve 실행
    } else {
      reject("❌ 작업 실패!");   // 실패한 경우 → reject 실행
    }
  }, 2000);
});
```
---
## 📦 2. Promise 인스턴스 메서드

| 메서드        | 설명                                                                 |
| ------------- | -------------------------------------------------------------------- |
| `.then()`     | 작업 성공 시 실행할 콜백 등록. `resolve()`의 결과를 받는다.          |
| `.catch()`    | 작업 실패 시 실행할 콜백 등록. `reject()`의 에러를 받는다.            |
| `.finally()`  | 성공/실패 관계없이 항상 실행되는 콜백 등록                           |
```javascript
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log(data))   // 성공 처리
  .catch((error) => console.error(error)) // 에러 처리
  .finally(() => console.log('요청 종료'));
```
---

## 🔗 3. Promise Chaining (프로미스 체이닝)

여러 비동기 작업을 **순차적으로 연결**해서 처리할 수 있는 패턴  
`.then()` 메서드는 새로운 `Promise`를 반환하기 때문에 계속 이어서 `.then()`으로 연결 가능

```javascript
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ 1단계 완료");
      resolve("step1 결과");
    }, 1000);
  });
}

function step2(result) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ 2단계 완료, 이전: " + result);
      resolve("step2 결과");
    }, 1000);
  });
}

function step3(result) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ 3단계 완료, 이전: " + result);
      resolve("모든 단계 완료");
    }, 1000);
  });
}

step1()
    .then(step2)
    .then(step3)
    .then((final) => {
      console.log("🎉 최종 결과:", final);
    })
    .catch((err) => {
      console.error("❌ 에러 발생:", err);
    });
```

---

## 🚀 4. Static Methods (정적 메서드)

| 메서드                | 설명                                                                 |
| --------------------- | -------------------------------------------------------------------- |
| `Promise.resolve()`   | 값을 바로 `fulfilled` 상태의 Promise로 감쌈                          |
| `Promise.reject()`    | 값을 바로 `rejected` 상태의 Promise로 감쌈                           |
| `Promise.all()`       | 모든 Promise가 `fulfilled` 될 때까지 대기, 하나라도 실패 시 `reject`됨 |
| `Promise.allSettled()`| 모든 Promise가 `settled`(성공 or 실패)될 때까지 대기, 결과 배열 반환 |
| `Promise.race()`      | 가장 먼저 `settled`된 Promise 하나만 반환                            |
| `Promise.any()`       | `fulfilled`된 Promise 중 가장 먼저 도착한 결과 반환 (모두 실패 시 에러 발생) |
```javascript
Promise.all([
  fetch('/user'),
  fetch('/posts')
]).then((res) => console.log('모두 완료됨'));
```
---

## 🔍 5. `Promise.all()` vs `Promise.allSettled()` vs `Promise.any()`

| 구분             | `Promise.all()`                  | `Promise.allSettled()`                | `Promise.any()`                                |
| ---------------- | -------------------------------- | ------------------------------------- | --------------------------------------------- |
| **성공 조건**     | 모두 성공해야 `fulfilled`         | 모두 완료되기만 하면 됨                | 하나라도 성공하면 `fulfilled`                  |
| **실패 시 동작**   | 하나라도 실패 시 전체가 `rejected` | 실패/성공 여부 관계없이 결과 배열 반환 | 모두 실패하면 `AggregateError` 발생           |
| **대표적 사용 예** | 병렬 작업이 모두 성공해야 할 때   | 성공/실패 상관없이 상태 확인이 필요할 때 | 하나만 성공하면 되는 작업이 있을 때           |

---

## 💡 6. 콜백 지옥 → Promise → async/await

복잡한 비동기 로직을 `Promise`와 `async/await`으로 바꾸면 가독성과 유지보수성이 훨씬 좋아짐

### async/await 개요

- `async` 키워드가 붙은 함수는 항상 `Promise`를 반환
- `await`는 `Promise`가 처리될 때까지 기다렸다가 결과를 반환

```javascript
// 콜백 지옥
getUser((user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});

// Promise 체이닝
getUser()
  .then((user) => getPosts(user.id))
  .then((posts) => getComments(posts[0].id))
  .then((comments) => console.log(comments));

// async/await
const showComments = async () => {
  const user = await getUser();
  const posts = await getPosts(user.id);
  const comments = await getComments(posts[0].id);
  console.log(comments);
};
```

---

## ✅ 정리

- 비동기 작업은 UI나 다른 작업의 흐름을 막지 않기 위해 필수적
- `Promise`는 비동기 흐름 제어의 표준 방식
- `then()`과 `catch()`로 콜백을 대체하고, `async/await`을 활용하면 더 깔끔한 코드 작성 가능
- API 요청 등에서 사용됨
### ⚠️ 주의사항
1. **불필요한 대기를 없애기**
```javascript
// ❌ 잘못된 예 (순차 실행)
const result1 = await task1();
const result2 = await task2();

// ✅ 좋은 예 (병렬 실행)
const [result1, result2] = await Promise.all([task1(), task2()]);
```

2. **에러 처리는 필수**
```javascript
// ❌ 잘못된 예
const data = await getData();

// ✅ 좋은 예
try {
    const data = await getData();
} catch (error) {
    console.log('에러 발생:', error);
}
```