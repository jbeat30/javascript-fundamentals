/**
 * Function.prototype.bind()
 *
 * - `this`와 일부 인자를 고정한 새로운 함수를 반환
 * - 함수는 즉시 실행되지 않고, 이후에 실행할 수 있음
 * - 콜백 함수에서 this 유지, 커링(curring) 방식 구현 등에 자주 사용
 *
 * @example
 * const user = { name: '민수' };
 * const greetMinsu = greet.bind(user, '안녕');
 * greetMinsu(); // 안녕, 민수
 */

import { User, greet } from './types';

const user: User = { name: '민수' };

// greet 함수의 this와 인자를 고정한 새로운 함수 생성
const greetMinsu = greet.bind(user, '안녕');

// 나중에 실행할 수 있음
greetMinsu(); // 출력: 안녕, 민수

/**
 * 💼 실무 활용 예시 1: 콜백 내부에서 this 유지
 *
 * 상황: 객체 메서드를 콜백 함수로 넘길 때 this가 깨지는 문제 해결
 */

class Logger {
  prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  log(this: Logger, message: string) {
    console.log(`[${this.prefix}] ${message}`);
  }
}

const logger = new Logger('INFO');

function executeLater(callback: (msg: string) => void) {
  setTimeout(() => callback('작업 완료'), 1000);
}

// bind로 this 고정
executeLater(logger.log.bind(logger));

/**
 * 출력:
 * [INFO] 작업 완료
 *
 * 💡 this가 undefined로 바인딩되는 문제를 방지하기 위해 bind 사용
 */

/**
 * 💼 실무 활용 예시 2: 부분 적용 함수(partial function) 구성
 */

function multiply(a: number, b: number): number {
  return a * b;
}

const double = multiply.bind(null, 2); // 첫 번째 인자 고정

console.log(double(5)); // 10
console.log(double(10)); // 20