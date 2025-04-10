# 🗺️ JavaScript Standard `Map`

`Map`은 JavaScript의 표준 내장 객체 중 하나로, **키-값 쌍**을 저장하는 `자료구조`다. 일반 객체(`Object`)와 달리, **모든 값(객체 포함)**을 키로 사용할 수 있고, 삽입 순서도 기억된다.

또한 `Map`은 `Object`보다 명확한 의도로 **데이터 컬렉션을 다룰 때 적합**하며, 제공하는 메서드들도 전용으로 최적화되어 있다.

> 💡 **Map 쉽게 이해하기**  
> Map은 정리된 수납함 – 원하는 물건(값)을 넣고,  
> 이름표(키)로 꺼낼 수 있고 순서도 유지되고,  
> 어떤 이름표든 붙일 수 있음 (숫자, 객체, 함수 등)
```javascript
const map = new Map(); // 빈 Map 생성

// 수납함에 물건(값)을 넣음
map.set('사과', '🍎');
map.set(123, '숫자 키');
map.set({ id: 1 }, '객체 키');

// 이름표(키)로 꺼내기
console.log(map.get('사과'));      // 출력: 🍎
console.log(map.get(123));        // 출력:숫자 키
console.log(map.get({ id: 1 })); // 출력: undefined (다른 객체) 다른 참조라 꺼낼수 없음

const objKey = { id: 1 };  // 객체 키를 변수에 저장
map.set(objKey, '객체 키'); // 같은 참조를 써서 set
console.log(map.get(objKey)); // 같은 참조니까 OK, 출력: 객체 키
```
---

## 🔍 `Object`와의 차이점

| 항목             | `Object`                                     | `Map`                                                |
|------------------|-----------------------------------------------|-------------------------------------------------------|
| 키 타입          | 문자열 또는 심벌(Symbol)만 가능              | **모든 타입** (문자열, 숫자, 객체, 함수 등) 가능       |
| 순서             | 보장되지 않음 (ES6 이후 일부 순서 유지됨)    | **삽입 순서 보장**                                    |
| 기본 프로토타입  | `Object.prototype` 상속                      | **null 프로토타입 가능** (내부 구조가 `Object.create(null)` 유사) |
| 성능             | 큰 데이터셋에서 느려질 수 있음               | **빠르고 일관된 성능**                                |
| 직관성           | 일반 속성과 유사하게 사용됨                 | **명확한 목적성 (데이터 컬렉션)**                     |

> ✅ `null 프로토타입 가능`이란?  
> `Map`은 내부적으로 객체처럼 동작하지만, `Object.prototype`에 있는 `hasOwnProperty`, `toString` 등 메서드를 상속받지 않음
> 따라서 `Map`을 사용하면 키-값 쌍을 다룰 때 불필요한 메서드 충돌을 피할 수 있음

---

## 🧱 1. 생성자

`new Map([iterable])`

- `iterable`: `[key, value]` 쌍의 배열 또는 이터러블 객체를 전달해야 함
- 생략 시 빈 `Map`이 생성됨

> `iterable`에는 배열 외에도 `Set`, `Generator`, `Map` 등 `for...of`로 순회 가능한 객체라면 무엇이든 들어갈 수 있음

---

## 📚 2. 주요 인스턴스 메서드

> `Map` 인스턴스에 직접 호출하는 메서드들로, 컬렉션의 조작과 순회 등을 담당함  
> 🔥 = 실무에서 자주 사용 | 💡 = 상황에 따라 유용

| 메서드                     | 설명                                                                                                                                        |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| 🔥 `set(key, value)`       | `key`에 해당하는 값을 설정 (기존 키면 덮어씀) [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/map/instance-method/set.ts)          |
| 🔥 `get(key)`              | `key`에 해당하는 값을 반환 (`undefined`일 수 있음) [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/map/instance-method/get.ts)  |
| 🔥 `has(key)`              | 해당 키가 존재하는지 확인 (boolean) [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/map/instance-method/has.ts)               |
| 🔥 `delete(key)`           | 특정 키-값 쌍 제거, 성공 여부 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/map/instance-method/delete.ts)               |
| 🔥 `clear()`               | 모든 요소 제거 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/map/instance-method/clear.ts)                             |
| 🔥 `forEach(callbackFn)`   | 각 요소에 대해 콜백 실행 (삽입 순서 유지) [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/map/instance-method/forEach.ts)          |
| 💡 `keys()`                | 모든 키를 `MapIterator`로 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/map/instance-method/keys.ts)               |
| 💡 `values()`              | 모든 값을 `MapIterator`로 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/map/instance-method/values.ts)             |
| 💡 `entries()`             | `[key, value]` 쌍의 `MapIterator` 반환 [👉 Example Code](https://github.com/jbeat30/js-ts-study/blob/main/src/map/instance-method/entries.ts) |

> `forEach` 콜백 함수의 시그니처 `callbackFn(value, key, map)`  
> 다른 컬렉션(`Array`)과 순서가 다르므로 혼동 주의 =>  Array에서는 `callbackFn(element, index, array)` 형태로 호출됨

---

## 📏 3. 속성

| 속성      | 설명 |
|-----------|------|
| `.size`   | `Map`에 저장된 요소의 개수를 반환 (읽기 전용) |

---

## 🧩 4. 자주 쓰이는 패턴

| 패턴                         | 설명 |
|------------------------------|------|
| **초기화 패턴**             | `new Map([[k1, v1], [k2, v2]])` 형식으로 초기값 설정 |
| **조건부 저장**             | `if (!map.has(key)) map.set(key, value)` |
| **객체 → Map 변환**         | `new Map(Object.entries(obj))` |
| **Map → 객체 변환**         | `Object.fromEntries(map)` |
| **값 누적 패턴**            | `map.set(k, (map.get(k) || 0) + 1)` 형태로 카운팅 |

---

## 🔄 5. 순회 및 변환

| 방법                       | 설명 |
|----------------------------|------|
| `for...of map`             | `[key, value]` 형태로 순회 (`Map` 자체가 이터러블) |
| `Array.from(map)`          | `Map`을 배열로 변환 (`[[key, value], ...]`) |
| `[...map]` (spread syntax) | 전개 연산자로 배열화 가능 |

> `Map`을 배열로 변환하면 필터링, 정렬, reduce 등 다양한 배열 메서드를 활용할 수 있음

---

## 🔗 참고: 관련 개념 요약

| 개념                  | 설명 |
|------------------------|------|
| **이터러블**           | `for...of`나 전개 연산자 등 순회 가능한 객체 (Map, Set 포함) |
| **반복자 (Iterator)**  | `next()` 메서드로 값을 순차적으로 반환하는 객체 |
| **Object.entries()**   | 일반 객체를 `[key, value]` 쌍 배열로 변환 |
| **Object.fromEntries()** | 배열을 일반 객체로 변환 (Map 변환 시 유용) |

---