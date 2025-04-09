/**
 * Function.prototype.apply()
 *
 * - 함수를 즉시 실행하며, `this`와 인자를 배열 형태로 전달
 * - `call`과 매우 유사하나, 인자 전달 방식이 배열이라는 점이 다름
 * - 인자 수가 동적으로 정해지는 상황에서 유용
 *
 * @example
 * const user = { name: '영희' };
 * greet.apply(user, ['반가워요']); // 반가워요, 영희
 */

import { User, greet } from './types';

const user: User = { name: '영희' };

// 배열로 인자를 전달
greet.apply(user, ['반가워요']);

/**
 * 💼 실무 활용 예시: 다수의 인자를 동적으로 전달할 때
 * 💡 참고: 인자가 몇 개인지 모르거나, 외부 데이터로부터 배열 형태로 받는 경우에 유용
 * 특히 사용자 입력값, 서버 응답 등을 그대로 넘겨야 할 때 적용 가능
 * 상황: 외부에서 전달받은 인자 배열을 동적으로 처리해야 하는 함수 호출
 */

function introduce(this: User, ...args: string[]) {
  console.log(`${args.join(' ')}, 저는 ${this.name}입니다.`);
}

const user2 = { name: '킹스맨' };
const introPhrases = ['안녕하세요', '반갑습니다', '좋은 날씨네요'];

// apply를 사용해 인자를 동적으로 전달
introduce.apply(user2, introPhrases);
// 출력:
// 안녕하세요 반갑습니다 좋은 날씨네요, 저는 지우입니다.