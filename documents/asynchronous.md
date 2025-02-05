# 🌟 자바스크립트 비동기 프로그래밍 이해하기

## 1. 🤔 비동기 프로그래밍이 필요한 이유

### 동기 vs 비동기
JavaScript는 기본적으로 **동기적(Synchronous)** 으로 동작하며,  
즉, 코드가 순차적으로 실행되며 한 작업이 끝날 때까지 다음 작업은 시작되지 않음

```javascript
console.log("첫 번째");  // 1️⃣ 첫 번째 실행
console.log("두 번째");  // 2️⃣ 두 번째 실행
console.log("세 번째");  // 3️⃣ 세 번째 실행
```

하지만 시간이 오래 걸리는 작업들이 있음
- 🌐 서버에서 데이터 가져오기 (API 호출)
- 📁 대용량 파일 처리
- ⏲️ 타이머 설정

> 💡 **API란?**  
> Application Programming Interface의 약자로, 프로그램들이 서로 통신하는 방법을 정의한 규칙을 의미함

```javascript
const data = fetchDataFromServer();  // 3초 소요
console.log("다음 작업");           // ⚠️ 3초 동안 멈춤
```

이런 문제를 해결하기 위해 **비동기 프로그래밍**이 필요함

## 2. 💡 Promise 이해하기

### Promise란?
비동기 작업의 결과를 나타내는 객체로, 작업이 완료되면 성공 또는 실패를 알려줌

> 💡 **Promise 쉽게 이해하기**  
> 음식점 주문 번호표와 같음 - 주문(비동기 작업)을 하면 번호표(Promise)를 받고,   
> 음식(결과)이 완성되면 알려줌

### Promise의 3가지 상태
| 상태 | 설명 | 실제 상황 |
|------|------|-----------|
| 🕒 **대기(Pending)** | 작업 진행 중 | 주문한 음식 조리 중 |
| ✅ **성공(Fulfilled)** | 작업 완료 | 음식 완성 |
| ❌ **실패(Rejected)** | 작업 실패 | 재료 소진으로 취소 |

### 수동 Promise 생성하기 (new Promise())
Promise는 new Promise((resolve, reject) => {...}) 형식으로 생성됨
> 💡 **resolve와 reject란?**  
resolve(value) → 작업 성공 시 호출 (Promise가 Fulfilled 상태가 됨)  
reject(error) → 작업 실패 시 호출 (Promise가 Rejected 상태가 됨)
```javascript
const myPromise = new Promise((resolve, reject) => {
    let success = true; // 성공 여부 (테스트용)
    
    setTimeout(() => {
        if (success) {
            resolve("🎉 작업 성공!");  // ✅ 성공 시 실행
        } else {
            reject("❌ 작업 실패!");   // ❌ 실패 시 실행
        }
    }, 2000); // 2초 후 실행
});
```

### Promise 사용하기
```javascript
myPromise // 위에서 만든 예제
  .then(result => console.log(result))  // ✅ 성공: "🎉 작업 성공!" 출력
  .catch(error => console.log(error))   // ❌ 실패: "❌ 작업 실패!" 출력
  .finally(() => console.log("🔄 작업 완료"));  // 🔄 항상 실행

// fetch는 Promise를 반환
fetch('https://api.example.com/data')  // 데이터 요청
   .then(response => response.json())  // ✅ 성공시: 데이터 변환
   .catch(error => console.log(error)) // ❌ 실패시: 에러 처리
   .finally(() => console.log('완료')) // 🔄 항상: 마무리 작업
```

### 프로미스 체이닝 (Promise Chaining)
여러 비동기 작업을 순차적으로 처리할 때 사용하며, `.then()`을 연속적으로 호출하여 작업을 연결 가능

```javascript
fetch('/api/user')
    .then(response => response.json())  // 1️⃣ 사용자 데이터 가져오기
    .then(user => fetch(`/api/posts/${user.id}`))  // 2️⃣ 사용자의 게시물 가져오기
    .then(response => response.json())  // 3️⃣ 게시물 데이터 변환
    .then(posts => console.log(posts))  // 4️⃣ 결과 출력
    .catch(error => console.log(error)); // ❌ 에러 처리
```

> 💡 **프로미스 체이닝의 장점**
> - 비동기 작업을 순차적으로 처리함
> - 코드의 가독성을 높임

## 3. ⚡ async/await 이해하기

### async/await이란?
Promise를 더 쉽게 사용할 수 있게 해주는 새로운 문법
> 💡 **async/await 쉽게 이해하기**  
> Promise의 `.then()` 지옥에서 벗어나 일반적인 코드처럼 작성할 수 있게 해주는 도구

### Promise vs async/await 비교
```javascript
// Promise 방식 👇
function getUser() {
   return new Promise((resolve, reject) => { // ✅ 명확한 Promise 반환
      fetch('/api/user')
        .then(res => res.json())
        .then(user => {
           fetch(`/api/posts/${user.id}`)
             .then(res => res.json())
             .then(posts => resolve(posts)) // ✅ resolve 호출
             .catch(error => reject(error)); // ✅ reject 호출
        })
        .catch(error => reject(error)); // ✅ reject 호출
   });
}


// async/await 방식 👇
async function getUser() {
    try {
        const res = await fetch('/api/user');
        const user = await res.json();
        const posts = await fetch(`/api/posts/${user.id}`);
        return posts.json();
    } catch (error) {
        console.log(error);
    }
}
```

## 4. 🚀 실전 활용 패턴

### 비동기 작업 처리 방법
1. **순차 처리** (하나씩)
```javascript
async function sequential() {
    const result1 = await task1();  // 1번 작업 완료 후
    const result2 = await task2();  // 2번 작업 시작
}
```

2. **병렬 처리** (동시에)
```javascript
async function parallel() {
    const [result1, result2] = await Promise.all([
        task1(),  // 1번 작업 시작
        task2()   // 2번 작업 동시 시작
    ]);
}
```

> 💡 **Promise.all이란?**  
> 동시에 다중으로 Promise를 처리할 수 있음 단, 하나라도 실패하면 모든 작업이 중단 
> `Promise.allSettled`를 사용하면 사용하면 성공과 실패를 구분하여 처리 가능

```javascript
// Promise.allSettled 예제
async function parallelSettled() {
    const results = await Promise.allSettled([
        task1(),  // 성공 또는 실패
        task2()   // 성공 또는 실패
    ]);
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log('성공:', result.value);
        } else {
            console.log('실패:', result.reason);
        }
    });
}
```

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

## 5. 🎯 실전 가이드
| 상황 | 사용 방식 | 이유 |
|------|-----------|------|
| 간단한 데이터 요청 | Promise | 코드가 직관적임 |
| 여러 데이터 동시 요청 | Promise.all | 성능이 좋음 |
| 복잡한 데이터 처리 | async/await | 코드 이해가 쉬움 |
| 에러 처리가 중요할 때 | async/await | try-catch 사용 가능 |

> 💡 **TIP**
> 1. Promise와 async/await는 섞어서 사용해도 됨
> 2. 단순한 상황에선 Promise를, 복잡한 상황에선 async/await를 사용하면 좋음
> 3. `Promise.allSettled`를 사용하면 모든 작업의 성공/실패를 구분하여 처리 가능