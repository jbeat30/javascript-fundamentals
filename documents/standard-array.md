# 🚀 JavaScript Standard Array
`Array`는 자바스크립트의 표준 내장 객체로, 배열을 쉽게 다룰 수 있도록 다양한 메서드와 속성을 제공하며, `Array`의 메서드는 크게 두 가지로 분류된다:
- **정적 메서드**: `Array` 클래스에서 직접 호출하는 메서드
- **인스턴스 메서드**: 배열 인스턴스를 통해 호출하는 메서드

---
## 📚 1. JavaScript Static Method

### 1 . `Array.from()`

- 배열과 유사한 객체나 반복 가능한 객체(iterable)를 배열로 변환

```javascript
const str = 'hello';
const arr = Array.from(str);

console.log(arr); // ['h', 'e', 'l', 'l', 'o']
```

### 2 . `Array.isArray()`

- 주어진 값이 배열인지 확인

```javascript
const arr = [1, 2, 3];
console.log(Array.isArray(arr)); // true
console.log(Array.isArray('hello')); // false
```

### 3 . `Array.of()`

- 주어진 인자를 요소로 가지는 새로운 배열 생성

```javascript
const arr = Array.of(1, 2, 3);
console.log(arr); // [1, 2, 3]
```

### 🔍 `Array.from()` vs `Array.of()` 차이점


| 구분          | `Array.from()`                                  | `Array.of()`                             |
| ------------- | ----------------------------------------------- | ---------------------------------------- |
| **용도**      | 변환용                                          | 배열 생성용                              |
| **설명**      | 유사 배열 객체 또는 iterable 객체를 배열로 변환 | 주어진 인자들을 요소로 갖는 새 배열 생성 |
| **사용 예시** | `'abc' → ['a', 'b', 'c']`                      | `1, 2 → [1, 2]`                         |

> ✅ **정리**
> `Array.from()`은 **변환**에 초점,
> `Array.of()`는 **새로운 배열 생성**에 초점

---

## 📦 2. JavaScript Array Method 분류표 (W3Schools 기준)

> 🔥 자주 사용  
> 💡 유용한 메서드

### 📖 **Basic Array Methods**
- 배열 생성, 복사, 수정 등 기본적인 동작 수행

| 메서드           | 원본 변경 | 복사 방식 | 설명                                                                                                                                     |
| ---------------- | --------- | --------- |----------------------------------------------------------------------------------------------------------------------------------------|
| `length`         | ❌        | -         | 배열의 길이(요소 개수)를 반환                                                                                                                      |
| `toString()`     | ❌        | -         | 배열을 쉼표로 구분된 문자열로 반환                                                                                                                    |
| `join()`         | ❌        | -         | 배열을 지정된 구분자로 문자열 병합                                                                                                                    |
| `at()`           | ❌        | -         | 지정한 인덱스의 요소 반환                                                                                                                         |
|🔥 `concat()`       | ❌        | 얕은 복사 | 두 개 이상의 배열을 병합하여 새 배열 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/basic/concat.ts) |
|🔥 `slice()`        | ❌        | 얕은 복사 | 배열 일부를 잘라 새 배열 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/basic/slice.ts)         |
|🔥 `splice()`       | ✅        | -         | 배열 요소 추가, 제거, 교체 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/basic/splice.ts)         |
|🔥 `push()`         | ✅        | -         | 배열 끝에 요소 추가 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/basic/push.ts)                |
|🔥 `pop()`          | ✅        | -         | 배열 마지막 요소 제거 및 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/basic/pop.ts)           |
|💡 `shift()`        | ✅        | -         | 배열 첫 요소 제거 및 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/basic/shift.ts)           |
|💡 `unshift()`      | ✅        | -         | 배열 앞에 요소 추가 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/basic/unshift.ts)             |
| `fill()`         | ✅        | 얕은 복사 | 배열을 특정 값으로 채움                                                                                                                          |
| `copyWithin()`   | ✅        | 얕은 복사 | 배열 내부의 일부를 복사해 덮어쓰기                                                                                                                    |
|🔥 `flat()`         | ❌        | 얕은 복사 | 중첩 배열 평탄화 후 새 배열 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/basic/flat.ts)        |
| `flatMap()`      | ❌        | 얕은 복사 | `map()` 후 평탄화하여 새 배열 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/basic/flatMap.ts) |
| `delete`         | ✅        | -         | 요소를 삭제하지만 인덱스는 남아 있음 (`undefined`) 처리됨                                                                                                 |

---

### 🔍 **Search Methods**
- 배열에서 특정 요소를 검색하거나 조건 만족 여부 확인

| 메서드              | 원본 변경 | 복사 방식 | 설명                                                                                                                                             |
| ------------------- | --------- | --------- |------------------------------------------------------------------------------------------------------------------------------------------------|
|🔥 `indexOf()`         | ❌        | -         | 특정 요소의 첫 번째 인덱스 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/search/indexOf.ts)              |
| `lastIndexOf()`     | ❌        | -         | 특정 요소의 마지막 인덱스 반환                                                                                                                              |
|🔥 `includes()`        | ❌        | -         | 요소 포함 여부 반환 (`true` / `false`) [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/search/includes.ts) |
|🔥 `find()`            | ❌        | -         | 조건을 만족하는 첫 번째 요소 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/search/find.ts)                |
|💡 `findIndex()`       | ❌        | -         | 조건을 만족하는 첫 번째 요소의 인덱스 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/search/findIndex.ts)     |
| `findLast()`        | ❌        | -         | 조건을 만족하는 마지막 요소 반환 (ES2023+)                                                                                                                   |
| `findLastIndex()`   | ❌        | -         | 조건을 만족하는 마지막 요소의 인덱스 반환 (ES2023+)                                                                                                              |

---

### 🔄 **Sort Methods**
- 배열 정렬 및 순서 변경

| 메서드         | 원본 변경 | 복사 방식 | 설명                                                                                                                              |
| -------------- | --------- | --------- |---------------------------------------------------------------------------------------------------------------------------------|
|🔥 `sort()`       | ✅        | 얕은 복사 | 배열 요소를 유니코드 기준으로 정렬 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/sort/sort.ts) |
|🔥 `reverse()`    | ✅        | 얕은 복사 | 배열 요소 순서를 반대로 정렬 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/sort/reverse.ts)  |
| `toSorted()`   | ❌        | 얕은 복사 | 원본 변경 없이 정렬된 새 배열 반환 (ES2023+)                                                                                                  |
| `toReversed()` | ❌        | 얕은 복사 | 원본 변경 없이 순서 뒤집은 새 배열 반환 (ES2023+)                                                                                               |

---

### ♻️ **Iteration Methods**
- 배열의 각 요소를 순회하며 연산 수행

| 메서드          | 원본 변경 | 복사 방식 | 설명                                                                                                                                             |
|--------------| --------- | --------- |------------------------------------------------------------------------------------------------------------------------------------------------|
|🔥 `forEach()` | ❌        | -         | 각 요소에 대해 지정된 콜백 함수 실행 (값 반환 없음) [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/iteration/forEach.ts) |
|🔥 `map()`    | ❌        | 얕은 복사 | 각 요소를 변환하여 새 배열 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/iteration/map.ts)                  |
|🔥 `filter()` | ❌        | 얕은 복사 | 조건에 맞는 요소만 모아 새 배열 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/iteration/filter.ts)            |
|💡 `reduce()`   | ❌        | -         | 좌측에서 우측으로 누산하여 단일 값 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/iteration/reduce.ts)           |
| `reduceRight()` | ❌        | -         | 우측에서 좌측으로 누산하여 단일 값 반환                                                                                                                         |
|💡 `every()`    | ❌        | -         | 모든 요소가 조건을 만족하면 `true` 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/iteration/every.ts)     |
|💡 `some()`     | ❌        | -         | 하나라도 조건을 만족하면 `true` 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/array/instance-method/iteration/some.ts)            |
| `flatMap()`  | ❌        | 얕은 복사 | `map()` 후 결과 평탄화 (반복 + 평탄화 결합)                                                                                                                 |
| `entries()`  | ❌        | -         | [index, value] 쌍을 순회할 수 있는 iterator 반환                                                                                                         |
| `keys()`     | ❌        | -         | 배열의 인덱스를 순회하는 iterator 반환                                                                                                                      |
| `values()`   | ❌        | -         | 배열의 값들을 순회하는 iterator 반환                                                                                                                       |

---

## 🧩 복사 형식의 종류

- 배열이나 객체를 복사할 때는 **얕은 복사(Shallow Copy)** 와 **깊은 복사(Deep Copy)** 두 가지 방식이 있음
- `얕은 복사`
    - 상위 객체만 복사하고 내부 객체는 참조를 공유함
    - 중첩된 객체를 수정하면 원본에도 영향이 감
- `깊은 복사`
    - 중첩된 내부 객체까지 재귀적으로 복사
    - 원본과 완전히 독립적인 복사본 생성
- 중첩 구조(객체 안 객체, 배열 안 배열)가 있는 경우는 **깊은 복사 필수!**
- `structuredClone()`은 **ECMAScript 2021 (ES12)**에 추가된 메서드로 깊은 복사를 안전하게 지원함

| 구분          | 설명                                                 | 특징                                                    | 대표 메서드                                            |
| ------------- | ---------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------ |
| **얕은 복사** | 상위 객체만 복사하고, 내부 중첩 객체는 참조를 공유함 | 복사한 객체에서 중첩 객체를 수정하면 원본에도 영향을 줌 | `slice()`, `concat()`, `map()`, `filter()`             |
| **깊은 복사** | 중첩된 모든 값까지 재귀적으로 복사                   | 원본과 완전히 독립적인 복사본 생성                      | `structuredClone()`, `JSON.parse(JSON.stringify(...))` |

> ⚠️ **주의**
> - 얕은 복사는 단순한 구조에만 적합
> - 중첩된 구조가 있는 경우에는 **예상치 못한 부작용**이 발생할 수 있음
> - 이럴 땐 반드시 **깊은 복사**를 사용해야 함

---

### 🔍 `structuredClone()` vs `JSON.parse(JSON.stringify(...))` 비교표

| 항목                           | `structuredClone()`                                             | `JSON.parse(JSON.stringify(...))`               |
|------------------------------| --------------------------------------------------------------- | ----------------------------------------------- |
| ✅ 깊은 복사 지원                   | O (정확하고 안전한 복사)                                        | O (기본적인 깊은 복사 가능)                     |
| 🗂️ 지원하는 자료형                 | 대부분의 자료형 지원 (Date, Map, Set, Blob, ArrayBuffer 등)     | 기본 자료형만 가능 (Date, Map, Set 등은 손실됨) |
| 🔄 순환 참조(Circular Reference) | O (지원함)                                                      | ❌ 오류 발생                                    |
| 🧪 함수 복사                     | ❌ 복사 불가                                                    | ❌ 복사 불가                                    |
| 📁 undefined, symbol 등       | O (복사됨)                                                      | ❌ JSON 형식상 무시됨                           |
| ⚡ 성능                         | 빠름 (최적화됨)                                                 | 상대적으로 느림                                 |
| 🌐 브라우저 지원                   | 최신 브라우저 (Chrome 98+, Firefox 94+, Safari 15.4+, Node 17+) | 거의 모든 환경                                  |
| 📅 도입 시기                     | ECMAScript 2021 (ES12)                                          | 매우 오래전부터 사용 가능                       |
| 💡 추천 사용 상황                  | 안전하고 복잡한 구조 복사 필요 시                               | 간단한 구조나 레거시 환경 지원 시               |

> 📌 **정리**
> - `structuredClone()`은 **정확하고 안정적인 깊은 복사**가 필요할 때 최선의 선택
> - `JSON.parse(JSON.stringify(...))`는 **간단한 구조나 빠른 작업**에만 제한적으로 사용해야 함 (자료 손실 발생 가능)