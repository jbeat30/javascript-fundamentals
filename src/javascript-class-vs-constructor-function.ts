// =================================================================================================
//                                            ES6 Class
// =================================================================================================
class CalculatorClass {
  name?: string;
  number?: number;

  constructor(name?: string, number?: number) {
    this.name = name;
    this.number = number;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
  add(a: number, b: number) {
    console.log(a + b);
  }

  subtract(a: number, b: number) {
    console.log(a - b);
  }

  multiply(a: number, b: number) {
    console.log(a * b);
  }

  divide(a: number, b: number) {
    console.log(a / b);
  }
}

const calculator = new CalculatorClass('계산기');
calculator.greet(); // Hello 계산기
calculator.add(1, 2); // 3
calculator.subtract(1, 2); // -1
calculator.multiply(1, 2); // 2
calculator.divide(1, 2); // 0.5

// =================================================================================================
//                                    ES5 Constructor Function
// =================================================================================================
// 생성자 함수의 타입을 정의
interface Calculator {
  name?: string;
  number?: number;
  greet(): void;
  add(a: number, b: number): void;
  subtract(a: number, b: number): void;
  multiply(a: number, b: number): void;
  divide(a: number, b: number): void;
}
// 생성자 함수 정의
function CalculatorConstructor(this: Calculator, name?: string, number?: number) {
  this.name = name;
  this.number = number;
}

// 프로토타입 메서드 추가
CalculatorConstructor.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

CalculatorConstructor.prototype.add = function (a: number, b: number) {
  console.log(a + b);
};

CalculatorConstructor.prototype.subtract = function (a: number, b: number) {
  console.log(a - b);
};

CalculatorConstructor.prototype.multiply = function (a: number, b: number) {
  console.log(a * b);
};

CalculatorConstructor.prototype.divide = function (a: number, b: number) {
  if (b === 0) {
    console.log("0으로 나눌 수 없습니다.");
    return;
  }
  console.log(a / b);
};

// 생성자 함수의 타입 정의
type CalculatorConstructorFunction = {
  (this: Calculator, name: string, number: number): void
  new (name: string): Calculator
}

// 생성자 함수를 CalculatorConstructorFunction으로 타입 지정
const TypedCalculatorConstructor = CalculatorConstructor as CalculatorConstructorFunction

// 계산기 인스턴스 생성 및 사용 예시
const myCalculator = new TypedCalculatorConstructor("내 계산기")
myCalculator.greet(); // Hello 계산기
myCalculator.add(1, 2); // 3
myCalculator.subtract(1, 2); // -1
myCalculator.multiply(1, 2); // 2
myCalculator.divide(1, 2); // 0.5
