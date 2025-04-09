/**
 * Function.prototype.call()
 *
 * - 함수를 즉시 실행하며, `this`와 인자를 쉼표로 나열해 전달
 * - `this`를 명시적으로 지정할 수 있어, 함수 재사용에 유용
 * - 메서드가 아닌 함수로 전달된 함수에서 객체 컨텍스트를 바인딩할 때 유용
 *
 * @example
 * const user = { name: '철수' };
 * greet.call(user, '안녕하세요'); // 안녕하세요, 철수
 */

import { User, greet } from './types';

const user: User = { name: '철수' };

// greet는 독립적인 함수이기 때문에 this를 지정해주어야 정확한 결과가 나옴
greet.call(user, '안녕하세요'); // 출력: 안녕하세요, 철수


/**
 * 💼 실무 활용 예시: 다형적인 로깅 함수
 *
 * 여러 객체에서 공통적인 로깅 형식을 재사용하고 싶을 때, call을 사용하면 유용함
 */

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