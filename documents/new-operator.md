# 🚀 `new` 연산자 완벽 이해하기

`new`는 **자바스크립트의 내장 예약어**로, **객체를 생성하는 특별한 역할**을 함
> `new` 연산자는 **생성자 함수** 또는 **클래스**와 함께 사용되며, 이를 기반으로 **새로운 객체(인스턴스)**를 생성함

---

## 📚 `new` 연산자의 4가지 동작 과정

1. **빈 객체 생성**
    - `new`는 먼저 **빈 객체**를 만듦
    - 이 객체는 생성자 함수 또는 클래스의 인스턴스가 됨

2. **`this` 바인딩**
    - 생성자 함수 내부에서 `this`는 새로 생성된 객체를 가리킴
    - 이를 통해 객체에 프로퍼티나 메서드를 추가할 수 있음

3. **생성자 함수 실행**
    - 생성자 함수 내부 코드가 실행되면서 객체가 초기화됨

4. **객체 반환**
    - 생성자 함수가 별도의 객체를 반환하지 않으면, `new`는 자동으로 새로 생성된 객체를 반환함

---

## 🔍 `new` 연산자 사용 예시

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person("John", 30);
console.log(person); // { name: "John", age: 30 }
```

### 📝 실행 과정
1. **빈 객체 생성** → `new`가 `{}`(빈 객체)를 만듦
2. **`this` 바인딩** → `this`가 새로 생성된 객체를 가리킴
3. **생성자 함수 실행** → `this.name = name;`과 `this.age = age;`가 실행되어 객체에 값이 할당됨
4. **객체 반환** → `{ name: "John", age: 30 }` 객체가 반환됨

---

## 🤔 `new` 없이 생성자 함수를 호출하면?

만약 `new` 없이 생성자 함수를 호출하면,  
`this`는 **전역 객체(브라우저에서는 `window`, Node.js에서는 `global`)**를 가리키게 됨

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = Person("John", 30); // `new` 없이 호출
console.log(person); // undefined (반환값 없음)
console.log(window.name); // "John" (전역 객체에 프로퍼티가 추가됨)
```

이렇게 되면, 원래 의도와 다르게 전역 객체에 프로퍼티가 추가되어 **예상치 못한 버그**가 발생할 수 있음  
👉 **생성자 함수는 반드시 `new`와 함께 사용해야 함!**

---

## 🛠 `new` 연산자 동작 원리 직접 구현하기

```javascript
function myNew(constructor, ...args) {
  // 1. 빈 객체 생성
  const obj = {};

  // 2. 프로토타입 연결
  Object.setPrototypeOf(obj, constructor.prototype);

  // 3. 생성자 함수 실행 (`this` 바인딩)
  const result = constructor.apply(obj, args);

  // 4. 반환값 처리 (객체 반환)
  return result instanceof Object ? result : obj;
}

// 사용 예시
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = myNew(Person, "John", 30);
console.log(person); // { name: "John", age: 30 }
```

---

## ✨ 결론

✔ `new`는 **자바스크립트에서 객체를 생성하는 필수적인 예약어**임  
✔ **빈 객체 생성 → `this` 바인딩 → 생성자 함수 실행 → 객체 반환** 순서로 동작함  
✔ `new` 없이 생성자 함수를 호출하면 **`this`가 전역 객체를 가리켜 버그가 발생할 가능성이 큼**  
✔ 생성자 함수는 반드시 `new`와 함께 사용해야 함! 🚀

---

> 💡 **TIP**
> - `new`를 사용할 때는 **생성자 함수의 이름을 대문자로 시작**하는 것이 좋음  
    >   (일반 함수와 구분하기 위함)
> - 클래스를 사용할 때는 `new`를 **반드시** 사용해야 함