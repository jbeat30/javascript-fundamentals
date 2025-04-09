# 🚀 JavaScript Standard Function Instance Method

`Function`은 자바스크립트의 표준 내장 객체로, 함수와 관련된 몇 가지 핵심 메서드를 제공한다.  
대표적으로 `call()`, `apply()`, `bind()` 세 가지가 있으며, 모두 **this 바인딩(제어)** 과 관련되어 있다.

---

## 📌 왜 Function 객체는 단순할까?

### ✅ 함수는 일급 객체
- 자바스크립트에서 함수는 객체처럼 다룰 수 있음
- 그래서 함수도 `Function`이라는 내장 객체를 통해 메서드를 가질 수 있음

### ✅ 핵심은 this 조작
- `Function`의 주된 역할은 **this를 바꾸거나 고정**해서 함수를 원하는 방식으로 실행하게 만드는 것
- `call`, `apply`, `bind` 세 메서드가 이걸 담당함

### ✅ ES6 이후 변화
- 화살표 함수, 스프레드 연산자 등이 등장하면서  
  `call`, `apply`, `bind`의 사용 빈도가 과거보다 줄어들기도 함

---

## 🧩 주요 메서드

### 1. Function.prototype.call()
- `call()` 메서드는 주어진 `this` 값과 함께 함수를 호출
- `call()` 메서드는 인수로 전달된 값들을 함수의 인수로 사용
- `call()` 메서드는 함수가 내부에서 `this`를 사용할 경우에만 의미 있게 동작함
- 단순한 함수(즉, `this`를 참조하지 않는 함수)에서는 `call()`을 쓸 필요가 없음
- 일반적으로 `call()`은 객체 메서드처럼 `this`를 특정 객체로 바인딩해 호출하고 싶을 때 사용됨

```typescript
function logUserInfo(this: User, action: string) {
  console.log(`[LOG] ${this.name} 님이 ${action}을(를) 수행했습니다.`);
}

const admin = { name: '관리자' };
const member = { name: '회원' };

logUserInfo.call(admin, '게시글 삭제');
logUserInfo.call(member, '댓글 작성');

// 결과:
// [LOG] 관리자 님이 게시글 삭제을(를) 수행했습니다.
// [LOG] 회원 님이 댓글 작성을(를) 수행했습니다.
```

### 2. Function.prototype.apply()
- `apply()` 메서드는 call()과 거의 동일하지만, 인수를 **배열 형태**로 전달한다는 점에서 차이가 있음
- `apply()` 메서드는 첫 번째 인수로 `this`, 두 번째 인수로 인수 배열을 전달
- `apply()` 메서드는 함수 내부에서 `this`를 참조할 경우에만 유용함
- ES6 이후에는 spread 연산자(...)로 call()을 사용하는 방식이 더 자주 쓰이기도 함

```typescript
function logUserInfo(this: User, action: string) {
  console.log(`[LOG] ${this.name} 님이 ${action}을(를) 수행했습니다.`);
}

const guest = { name: '게스트' };

logUserInfo.apply(guest, ['리뷰 열람']);

// 결과:
// [LOG] 게스트 님이 리뷰 열람을(를) 수행했습니다.
```

### 3. Function.prototype.bind()
- `bind()` 메서드는 주어진 `this` 값을 바탕으로 새로운 함수를 반환
- 반환된 함수는 `this`가 고정되어 있음 (나중에 호출해도 고정됨)
- 즉시 실행이 아닌, 나중에 실행하기 위해 `this`를 미리 설정할 때 유용
- 역시 함수 내부에서 `this`를 참조하지 않는다면 사용할 이유가 없음
```typescript
function logUserInfo(this: User, action: string) {
  console.log(`[LOG] ${this.name} 님이 ${action}을(를) 수행했습니다.`);
}

const manager = { name: '매니저' };

const boundLog = logUserInfo.bind(manager);

boundLog('회원 정지');

// 결과:
// [LOG] 매니저 님이 회원 정지를(를) 수행했습니다.
```

## 🧠 기타 프로퍼티들 (참고용)

| 속성 / 메서드          | 설명 |
|------------------------|------|
| `Function.prototype.length` | 함수가 기대하는 인수의 개수 |
| `Function.prototype.name`   | 함수의 이름 |
| `Function.prototype.toString()` | 함수의 소스 코드를 문자열로 반환 |
| `new Function(...)`         | 런타임에 함수를 생성 (거의 안 씀, 보안 이슈 있음) |

---

## ✅ 마무리

> Function 객체는 **적고 굵게**, 핵심만 담고 있다.  
> `call`, `apply`, `bind` 이 세 가지를 이해하면, Function 객체는 이미 90% 끝난 거나 다름없다!

필요할 때 함수의 `this`를 어떻게 바꿀지 고민된다면, 이 세 메서드 중 하나를 떠올리면 된다.  
자주 쓰지 않는 속성은 참고 정도로만 알고 있어도 충분하다.