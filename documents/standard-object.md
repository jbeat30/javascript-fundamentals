# 🚀 JavaScript Standard `Object`

JavaScript의 `Object`는 모든 객체의 기반이 되는 표준 내장 객체로, **키-값 쌍**의 데이터를 저장, 조회, 수정, 삭제할 수 있게 해주며, `Object` 메서드는 크게 두 가지로 분류된다:

- **정적 메서드**: `Object` 클래스 자체에서 직접 호출 (ex: `Object.keys()`)
- **인스턴스 메서드**: 객체 인스턴스를 통해 호출 (ex: `obj.hasOwnProperty()`)

---

## 📚 1. 정적 메서드 (Static Methods)

> 클래스 수준에서 직접 호출하며, 객체 생성/조작/속성 제어 등에 주로 사용  
> 🔥 = 실무에서 자주 사용 | 💡 = 상황에 따라 유용하게 사용

| 메서드                                  | 설명 |
|----------------------------------------|------|
| 🔥 `Object.assign()`                   | 하나 이상의 소스 객체를 대상 객체에 병합 (얕은 복사) [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/object/static-method/assign.ts)|
| 🔥 `Object.keys()`                     | 객체의 열거 가능한 key들을 배열로 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/object/static-method/keys.ts)|
| 🔥 `Object.values()`                   | 객체의 열거 가능한 값들을 배열로 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/object/static-method/values.ts)|
| 🔥 `Object.entries()`                  | 객체를 `[key, value]` 쌍의 배열로 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/object/static-method/entries.ts)|
| 💡 `Object.fromEntries()`              | `[key, value]` 쌍 배열을 객체로 변환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/object/static-method/fromEntries.ts)|
| `Object.create()`                      | 지정한 프로토타입을 갖는 새 객체 생성 |
| `Object.hasOwn()`                      | 객체가 특정 속성을 직접 보유했는지 확인 (ES2022) |
| `Object.freeze()`                      | 객체를 동결하여 수정, 추가, 삭제를 막음 |
| `Object.seal()`                        | 객체를 봉인하여 속성 추가/삭제는 막고 기존 값은 수정 가능 |
| `Object.preventExtensions()`           | 객체에 새로운 속성 추가를 막음 |
| `Object.is()`                          | 두 값을 비교 (NaN도 동일하게 취급) |
| `Object.groupby()`                     | 배열을 주어진 콜백 기준으로 그룹화하여 객체로 반환 (ES2023) |
| `Object.defineProperty()`              | 객체에 개별 속성을 정의 또는 수정 |
| `Object.defineProperties()`            | 객체에 여러 속성을 동시에 정의 또는 수정 |
| `Object.getOwnPropertyDescriptor()`    | 객체의 특정 속성 설명자 반환 |
| `Object.getOwnPropertyDescriptors()`   | 객체의 모든 속성 설명자를 반환 |
| `Object.getPrototypeOf()`              | 객체의 프로토타입 반환 |
| `Object.setPrototypeOf()`              | 객체의 프로토타입 설정 |
| `Object.isExtensible()`                | 객체의 확장 가능 여부를 반환 |
| `Object.isFrozen()`                    | 객체가 동결되었는지 여부 반환 |
| `Object.isSealed()`                    | 객체가 봉인되었는지 여부 반환 |

---

## 📚 2. 인스턴스 메서드 (Instance Methods)

> 대부분 `Object.prototype`에 정의되어 있으며, 모든 객체 인스턴스가 상속받아 사용

| 메서드                    | 설명 |
|---------------------------|------|
| `hasOwnProperty()`        | 객체가 특정 속성을 직접 보유했는지 확인 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/object/instance-method/hasOwnProperty.ts)|
| `propertyIsEnumerable()`  | 해당 속성이 열거 가능한지 확인 |
| `isPrototypeOf()`         | 객체가 다른 객체의 프로토타입에 포함되어 있는지 확인 |
| `toString()`              | 객체를 문자열로 변환 (기본은 `[object Object]`) |
| `valueOf()`               | 객체의 원시값 반환 (기본적으로 객체 자체) |

---

## 🧩 자주 쓰이는 패턴

| 패턴                      | 설명 |
|---------------------------|------|
| **병합 패턴**             | `Object.assign({}, obj1, obj2)` 또는 `{ ...obj1, ...obj2 }` |
| **복사(얕은 복사) 패턴**  | 전개 구문 또는 `Object.assign()` |
| **비교 패턴**             | `JSON.stringify(obj1) === JSON.stringify(obj2)` *(단, 순서 영향 있음)* |
| **속성 존재 확인 패턴**   | `'key' in obj` 또는 `obj.hasOwnProperty('key')` |
| **삭제 패턴**             | `delete obj.key` |
| **접근/수정 패턴**        | `obj.key = value` 또는 `obj['key'] = value` |

---

## 🔍 관련 개념 요약
[👉 복사 형식 보러가기](https://github.com/jbeat30/javascript-fundamentals/blob/main/documents/standard-array.md#-%EB%B3%B5%EC%82%AC-%ED%98%95%EC%8B%9D%EC%9D%98-%EC%A2%85%EB%A5%98)

| 개념                  | 설명 |
|------------------------|------|
| **얕은 복사**          | 객체의 최상위 속성만 복사하며, 중첩된 객체는 참조가 복사됨 |
| **깊은 복사**          | 중첩된 모든 객체까지 재귀적으로 복사 |
| **freeze**             | 객체를 완전 불변으로 만들어 수정/삭제 불가 |
| **seal**               | 속성 추가/삭제는 불가, 수정은 가능 |
| **preventExtensions**  | 객체에 새로운 속성 추가를 방지 |

---

## 📌 참고: 연산자 및 기타

| 항목                     | 설명 |
|--------------------------|------|
| `in` 연산자              | 객체나 배열 안에 **속성(key)**이 존재하는지 확인 (`'key' in obj`) |
| `for...in`               | 객체의 열거 가능한 모든 속성(key)을 순회 *(프로토타입 체인 포함)* |
| `hasOwnProperty()`       | 객체의 **자체 속성**만 확인 (프로토타입 제외) |
| `Object.hasOwn()`        | 위 기능을 보완한 ES2022 메서드, 프로토타입 없는 객체에서도 안전 |
| `===` vs `Object.is()`   | `===`는 `NaN === NaN`이 `false`, `Object.is(NaN, NaN)`은 `true` |