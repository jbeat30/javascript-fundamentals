### **Promise란?**

-   **Promise**는 비동기 작업이 완료되었을 때의 결과를 나타내는 **객체**로, 비동기 작업의 성공 또는 실패를 처리하기 위한 방법을 제공
-   JavaScript에서 제공하는 **Promise API**를 사용하면 비동기 작업의 결과를 처리하고 관리할 수 있음
-   **Promise**에 세 가지 상태  
    -   **Pending**: 비동기 작업이 아직 완료되지 않은 상태 **(대기 중)**
    -   **Fulfilled**: 비동기 작업이 성공적으로 **완료**된 상태
    -   **Rejected**: 비동기 작업이 실패하여 **에러**가 발생한 상태
  
  #### Promise API의 주요 메서드

  -   **then()**: **Promise**가 성공적으로 이행되었을 때 호출되는 메서드
  -   **catch()**: **Promise**가 거부되었을 때 호출되는 메서드
  -   **finally()**: **Promise**의 상태에 상관없이 항상 실행되는 메서드

    
    {
    state: 'pending',  // 상태 ('pending', 'fulfilled', 'rejected')
    value: undefined,  // 작업 결과값 (성공 시 이곳에 값이 들어감)
    reason: undefined, // 오류 (실패 시 이곳에 오류가 들어감)
    onFulfilled: [callback],  // 비동기 작업이 완료되었을 때 실행될 함수들
    onRejected: [callback],   // 비동기 작업이 실패했을 때 실행될 함수들
    }
    

---

### **1. async/await**

-   **동기 코드처럼 보임**: async/await를 사용하면 비동기 코드를 작성할 때도 마치 동기 코드처럼 보임  
    그래서 가독성이 좋음
-   순차적 처리
  
  #### 오류 처리
  
  -   **async/await**는 **try/catch 구문**을 사용하여 오류를 처리할 수 있음
  -   반드시 **try/catch** 블록에서 해야 함

---

### **2. Promise 체이닝 (Promise API)**

-   **Promise 체이닝**은 비동기 작업을 **순차적**으로 **처리**할 때 사용
-   **then()** 메서드를 활용하여 각 작업의 결과를 다음 작업으로 전달하며 **순차적 처리**
-   이를 통해 코드의 가독성과 관리가 용이


  #### **병렬 작업**
  
  -   여러 비동기 작업을 병렬로 처리하려면 **Promise API에 병렬 메서드** 사용해야 함  
       `Promise.all`, `Promise.allSettled`, `Promise.race`, `Promise.any`
  -   **체이닝**과는 **다른 방식**
  
  
  #### 오류 처리
  
  -   **Promise** 체이닝에서 발생한 오류는 **catch()** 메서드를 통해 처리 가능
  -   **then()에서** 발생한 오류는 체이닝 된 **catch()**에서 **모두 처리**되므로, 코드가 깔끔해짐
  -   중간에 오류가 발생해도 **첫 번째 **catch()****에서 모든 오류를 통합적으로 **처리 가능**

---

### **3. async/await vs Promise**

-   Promise는 비동기 작업을 처리하는 객체이고, async/await는 Promise API를 더 쉽게 사용할 수 있게 해주는 문법
-   async/await는 Promise API를 더 쉽게 사용할 수 있게 해주는 문법이므로, async/await를 사용하면 Promise API를 사용하는 것보다 코드가 더 간결해짐
-   async/await는 Promise를 사용하는 것보다 가독성이 더 좋음

---

### **4. 🔥요약** 

1.  async/await과 Promise 체이닝은 **모두 순차적**으로 비동기 작업을 처리할 수 있음
2.  Promise 체이닝은 가독성이 좋음 하지만 **async/await는 동기적인 코드처럼 보여 가독성이 더 좋음**
3.  **비동기 병렬 작업**은 **Promise API의 병렬 처리 메서드 사용**
4.  "Promise를 직접 사용"은 말은 Promise 메서드(API)를 사용을 의미
5.  참고로 Promise API는 JavaScript에서 제공하는 Promise 관련 메서드이고, Promise 객체를 반환
---

## 비동기 처리 관련 코드
코드 예시 [Asynchronous.ts](https://github.com/jbeat30/js-ts-study/blob/main/src/Asynchronous.ts)
