# 🚀 자바스크립트 클래스(Class) vs 생성자 함수(Constructor Function) 비교

## 1. 🤔 객체지향 프로그래밍이란?

객체지향 프로그래밍(OOP)은 데이터와 기능을 하나의 단위(객체)로 묶어 관리하는 방식

### 💡 주요 개념

| 개념                     | 설명                   |
|------------------------|----------------------|
| 🛡️ 캡슐화(Encapsulation) | 데이터를 보호하고 필요한 기능만 노출 |
| 🧬 상속(Inheritance)     | 기존 기능을 확장하여 재사용 가능   |
| 🎭 다형성(Polymorphism)   | 동일한 인터페이스에 다양한 구현 가능 |
---

## 2. 📚 인스턴스 이해하기

> **인스턴스(Instance)**란 특정 클래스/생성자 함수를 사용하여 생성된 객체를 의미  
> 쉽게 말해, "설계도(클래스,생성자 함수)"를 기반으로 실제 만들어진 "건물(객체)"이라 할 수 있음

### ✅ 핵심 개념
❕**new 연산자** [**알아보기**](https://github.com/jbeat30/js-ts-study/blob/main/documents/new-operator.md)
1. **클래스 기반 인스턴스** (ES6+)
   ```js
   class Building {} // 클래스 = 설계도
   const myHouse = new Building(); // 인스턴스 생성
   ```

2. **생성자 함수 기반 인스턴스** (전통적 방식)
   ```js
   function Car() {} // 생성자 함수 = 설계도
   const myCar = new Car(); // 인스턴스 생성
   ```

3. **프로토타입 체인 연결**  
   모든 인스턴스는 생성자 함수의 `prototype` 객체와 연결되어 있음
   ```js
   // instanceof 연산자는 특정 객체가 특정 생성자 함수의 인스턴스인지 확인
   myCar instanceof Car; // true (프로토타입 체인 검증)
   ```

### 🚫 인스턴스가 아닌 경우   
   - **리터럴로 생성된 객체**는 최상위 객체인 `Object`의 인스턴스이지만, 생성자 함수를 사용하지 않았기 때문에 관례상 인스턴스라고 부르지 않음
     ```js
     const obj = {}; // new Object()와 동등하지만 관례상 인스턴스라 부르지 않음
     ```
---

## 3. 🏗️ ES6 클래스(Class) 이해하기

### 🤔 Class란?

ES6(ECMAScript 2015)에서 도입된 기능으로, 기존 생성자 함수보다 직관적인 문법을 제공

### ✔️ 클래스 기본 구조

- `constructor` 메서드로 객체 초기화
- `new` 연산자로 인스턴스 생성
- `extends` 키워드로 상속 구현 가능
- `super` 키워드로 부모 클래스 기능 호출 가능

```typescript
class SmartCalculator {
  // ✅ 프로퍼티 선언
  model: string;
  version?: number;  // 선택적 프로퍼티

  // 🏭 생성자 (객체 초기화)
  constructor(model: string, version?: number) {
    this.model = model;
    this.version = version;
  }

  // ⚡ 메서드 구현
  powerOn() {
    console.log(`${this.model} 전원 켜짐 ✨`);
  }

  add(x: number, y: number): number {
    return x + y;
  }
}
```

### 🛠️ 사용 예시

```typescript
const myCalc = new SmartCalculator('AI-2023', 2.1);
myCalc.powerOn();  // "AI-2023 전원 켜짐 ✨"
console.log(myCalc.add(5, 3));  // 8
```

> 🌟 **클래스의 장점**  
> ✅ 가독성이 높아 코드 이해가 쉬움  
> ✅ `this` 자동 바인딩으로 실수 방지  
> ✅ 타입스크립트와의 호환성 우수

---

## 4. ⚙️ ES5 생성자 함수(Constructor Function) 이해하기

### 🤔 생성자 함수란?

ES5에서 사용되던 객체 생성 방식으로, 클래스와 유사한 기능을 제공

### ✔️ 생성자 함수 기본 구조

```typescript
interface ClassicCalculator {
  model: string;
  version?: number;
  powerOn: () => void;
  add: (x: number, y: number) => number;
}

function ClassicCalculator(this: ClassicCalculator, model: string, version?: number) {
  this.model = model;
  this.version = version;
}
```

### 🔌 프로토타입 메서드 추가

```typescript
ClassicCalculator.prototype.powerOn = function () {
  console.log(`${this.model} 전원 켜짐 ✨`);
};

ClassicCalculator.prototype.add = function (x: number, y: number) {
  return x + y;
};
```

### 🧩 타입 안전성 확보

> 타입 어서션(Type Assertion)을 통한 안전한 사용
> 타입스크립트가 타입을 추론하지 못할 때 개발자가 타입을 강제로 지정하는 방법

```typescript
const SafeCalculator = ClassicCalculator as {
  new(model: string): ClassicCalculator;
  (this: ClassicCalculator, model: string): void;
};
```

### 🛠️ 사용 예시

```typescript
const oldCalc = new SafeCalculator('Vintage-2000');
oldCalc.powerOn();  // "Vintage-2000 전원 켜짐 ✨"
console.log(oldCalc.add(10, 5));  // 15
```

> ⚠️ **주의사항**  
> 🔧 `this`를 수동으로 관리해야 함  
> 🧠 프로토타입 개념을 이해해야 함  
> 📜 타입스크립트에서 사용하려면 추가 설정 필요

---

## 5. 📌 클래스 vs 생성자 함수 비교

| 비교 항목     | ES6 Class | ES5 생성자 함수 |
|-----------|-----------|------------|
| 문법 복잡도    | 단순함       | 비교적 복잡함    |
| 타입스크립트 지원 | 자동 지원     | 수동 설정 필요   |
| 프로토타입 작업  | 내부 처리     | 직접 설정 필요   |
| `this` 관리 | 자동 바인딩    | 수동 관리 필요   |
| 최신 기능 지원  | O         | X          |

---

## 6. 🎯 언제 어떤 방식을 선택할까?

| 상황          | 추천 방식     | 이유             |
|-------------|-----------|----------------|
| 모던 프로젝트     | ES6 Class | 가독성 및 유지보수 용이  |
| 레거시 코드 유지보수 | 생성자 함수    | 기존 코드와의 호환성 유지 |
| 빠른 개발 필요    | ES6 Class | 직관적인 문법        |

> 💡 **TIP**
> - 대부분의 경우 ES6 클래스 사용을 권장
> - 클래스는 `private/public` 접근 제어자 지원 → 캡슐화 용이
> - 타입스크립트에서 클래스는 타입으로도 활용 가능
> - IE 지원이 필요하면 생성자 함수 고려

---

### ✨ 결론

**ES6 Class는 현대 자바스크립트 개발의 표준!** 🏆  
**생성자 함수는 특수한 경우에만 활용하는 전문가용 도구!** 🔧