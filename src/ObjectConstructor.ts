// es6 Class
class Calculator {
  name?: string;

  constructor(name?: string) {
    this.name = name;
  }

  add(a: number, b: number) {
    return a + b;
  }

  div(a: number, b: number) {
    return a / b;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const calc1 = new Calculator('kang');
const calc2 = new Calculator();
console.log(Calculator.prototype.add === calc1.add);
console.log(calc1.add === calc2.add);
console.log(calc1.div === calc2.div);
console.log(calc1.greet());
console.log(calc2.greet());
console.log(calc1.add(2, 3)); // calc를 calc1로 수정
console.log(calc1.div(6, 3)); // calc를 calc1로 수정


// es5 Constructor Function
// 인터페이스 선언
interface CalculatorFnc {
  name: string;
  age: number;
  add(a: number, b: number): number;
  div(a: number, b: number): number;
  greet(): string;
}

// 생성자 함수 타입 선언 (ES5 스타일)
interface CalculatorFncConstructor {
  new(name?: string): CalculatorFnc;
}

// 생성자 함수 (ES5 스타일)
function CalculatorFnc(this: CalculatorFnc, name: string) {
  this.name = name;
}

CalculatorFnc.prototype.add = function (a: number, b: number): number {
  return a + b;
}
CalculatorFnc.prototype.div = function (a: number, b: number): number {
  return a / b;
}
CalculatorFnc.prototype.greet = function (): string {
  return `Hello ${this.name}`;
}

// 타입을 명시하여 인스턴스 생성
const createCalculator = (name: string = ''): CalculatorFnc => {
  return new (CalculatorFnc as unknown as CalculatorFncConstructor)(name); // 타입을 명시적으로 지정
};

// 타입을 명시하여 인스턴스 생성
const calcFnc = createCalculator('kang');
const calcFnc2 = createCalculator();

console.log('====================');
console.log(CalculatorFnc.prototype.add === calcFnc.add);
console.log(calcFnc.add === calcFnc2.add);
console.log(calcFnc.div === calcFnc2.div);
console.log(calcFnc.greet());
console.log(calcFnc2.greet());
console.log(calcFnc.add(3, 3));
console.log(calcFnc.div(6, 2));