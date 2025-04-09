/**
 * 사용자 객체 타입
 */
export type User = {
  name: string;
};

/**
 * 사용자에게 인사하는 함수
 *
 * @param this - User 객체를 this로 받음
 * @param greeting - 인사말
 */
export function greet(this: User, greeting: string): void {
  console.log(`${greeting}, ${this.name}`);
}
