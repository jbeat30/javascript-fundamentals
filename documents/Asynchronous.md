# *Promise란?
  - `Promise`는 비동기 작업이 완료되었을 때의 결과를 나타내는 객체로, 비동기 작업의 성공 또는 실패를 처리하기 위한 방법을 제공
  - `Promise`는 세 가지 상태를 가진다
    - **Pending**: 비동기 작업이 아직 완료되지 않은 상태 **(대기 중)**
    - **Fulfilled**: 비동기 작업이 성공적으로 **완료**된 상태
    - **Rejected**: 비동기 작업이 실패하여 **에러**가 발생한 상태
## Promise의 주요 메소드
  - **then()**: `Promise`가 성공적으로 이행되었을 때 호출되는 메소드
  - **catch()**: `Promise`가 거부되었을 때 호출되는 메소드
  - **finally()**: `Promise`의 상태에 상관없이 항상 실행되는 메소드
```object
# Promise 객체
{
  state: 'pending',  // 상태 ('pending', 'fulfilled', 'rejected')
  value: undefined,  // 작업 결과값 (성공 시 이곳에 값이 들어감)
  reason: undefined, // 오류 (실패 시 이곳에 오류가 들어감)
  onFulfilled: [callback],  // 비동기 작업이 완료되었을 때 실행될 함수들
  onRejected: [callback],   // 비동기 작업이 실패했을 때 실행될 함수들
}
```
---
## 1. async/await
- **동기 코드처럼 보임**: `async/await`를 사용하면 비동기 코드를 작성할 때도 마치 동기 코드처럼 보임  
그래서 가독성이 좋음
- **여러 비동기 작업을 순차적으로 처리**할 때, `async/await`는 코드를 더 명확하고 읽기 쉽게 만들 수 있음

  ### 오류 처리
  - `async/await`는 **try/catch 구문**을 사용하여 오류를 처리할 수 있음
  - 반드시 **try/catch** 블록에서 해야함
---
## 2. Promise 체이닝
- 여러 비동기 작업을 **병렬로 처리**할 때 `Promise.all`이나 `Promise.allSettled` 등의 방법을 활용할 수 있음
- `async/await`에서도 병렬 작업을 처리할 수 있지만, `Promise` 체이닝을 통해 더 명확하게 병렬 처리를 제어할 수 있음

  ### 오류 처리
    - `Promise` 체이닝에서 발생한 오류는 **`catch()`** 메소드를 통해 처리할 수 있음
    - `then()` 메소드에서 발생한 오류는, 해당 `then()`에서 반환한 `Promise`가 **거부(rejected)** 상태일 때, **체이닝된 `catch()`에서 처리**할 수 있음
    - 여러 개의 `Promise` 체이닝이 있을 때, 중간에 오류가 발생하면 **첫 번째로 나타나는 `catch()`에서 모든 오류를 처리**할 수 있어, 코드가 간결해짐
  ### Promise 체이닝이란?
  - 여러 비동기 작업을 순차적으로 처리하는 대신, 병렬로 처리하고 결과를 다룰 때 사용하는 `Promise`의 연속적인 호출 방식
---
## async/await vs Promise
- `Promise`는 비동기 작업을 처리하는 객체이고, `async/await`는 `Promise`를 더 쉽게 사용할 수 있게 해주는 문법
- `async/await`는 `Promise`를 더 쉽게 사용할 수 있게 해주는 문법이므로, `async/await`를 사용하면 `Promise`를 사용하는 것보다 코드가 더 간결해짐
- `async/await`는 `Promise`를 사용하는 것보다 가독성이 더 좋음

**사용 추천**
- 순차적인 비동기 처리나 간단할 때는 `async/await`를 사용하고, 병렬 처리나 복잡할 때는 `Promise`를 사용하는 것이 좋음
---
# 비동기 처리 관련 코드
코드 예시 [Asynchronous.ts](https://github.com/jbeat30/js-ts-study/blob/main/documents/src/Asynchronous.ts)