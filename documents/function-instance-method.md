# 🚀 JavaScript Function Instance Method

## 1. Function.prototype.call()
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

## 2. Function.prototype.apply()
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

## 3. Function.prototype.bind()
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

