# 📌 DOM 조작 메서드 정리

HTML 문자열이나 노드를 삽입·조작할 때 자주 사용하는 DOM 메서드 3가지.  
상황에 따라 적절한 메서드를 선택하면 성능과 가독성을 모두 챙길 수 있음.

---

## 1. `innerHTML`
- 👉 요소의 **전체 HTML 내용을 문자열로 변경**
- 문자열을 그대로 대입하면 **기존 내용은 전부 덮어써짐**
- `+=`로 이어붙일 수는 있지만, **전체 내용을 다시 렌더링**하게 되므로 성능에 부담이 큼
- 빠르게 초기 UI를 렌더링하거나, 실험적인 작업엔 편리함

```javascript
const target = document.getElementById("box");

// 기존 내용을 완전히 교체
target.innerHTML = "<p>새로운 내용으로 바꿈</p>";

// 기존 내용 뒤에 추가 (하지만 성능상 주의)
target.innerHTML += "<p>뒤에 추가한 내용</p>";
```
---

## 2. `insertAdjacentHTML(position, htmlString)`
- 👉 기존 DOM 구조를 유지하면서, **정해진 위치에만 HTML을 삽입**
- 전체를 다시 파싱하지 않기 때문에 `innerHTML`보다 **성능 면에서 우수**
- `position` 인자로 들어가는 값은 아래 중 하나:
  - `"beforebegin"`: 대상 요소 **앞에 삽입**
  - `"afterbegin"`: 대상 요소 **안쪽 맨 앞에 삽입**
  - `"beforeend"`: 대상 요소 **안쪽 맨 뒤에 삽입**
  - `"afterend"`: 대상 요소 **뒤에 삽입**
```javascript
const target = document.getElementById("box");

// 요소의 맨 앞에 삽입
target.insertAdjacentHTML("afterbegin", "<p>맨 앞에 삽입</p>");

// 요소의 맨 뒤에 삽입
target.insertAdjacentHTML("beforeend", "<p>맨 뒤에 삽입</p>");

// 요소 바로 앞에 삽입 (형제 노드로 들어감)
target.insertAdjacentHTML("beforebegin", "<hr>");

// 요소 바로 뒤에 삽입 (형제 노드로 들어감)
target.insertAdjacentHTML("afterend", "<hr>");
```

---

## 3. `document.createRange().createContextualFragment(htmlString)`
- 👉 HTML 문자열을 **실제 DOM 노드(Fragment)**로 변환함
- 일반 문자열을 직접 넣는 `innerHTML`과 달리, HTML을 DOM 형태로 먼저 파싱해서 조작할 수 있음.
- `<script>`가 실행되지 않음 → XSS(스크립트 삽입 공격) 방지에 유리함.
- 변환된 Fragment는 `appendChild()`, `insertBefore()`, `replaceChild()` 등 모든 DOM 삽입 방식과 함께 사용 가능.
```javascript
const target = document.getElementById("box"); // 삽입할 대상
const range = document.createRange(); // Range 객체 생성
const fragment = range.createContextualFragment("<p>파싱된 노드</p>"); // HTML 문자열을 Fragment로 변환 

// 1. 맨 뒤에 삽입
target.appendChild(fragment);

// 2. 맨 앞에 삽입
target.insertBefore(fragment, target.firstChild);

// 3. 특정 자식 앞에 삽입
const secondChild = target.children[1];
target.insertBefore(fragment, secondChild);

// 4. 기존 자식 노드를 교체
const toReplace = target.querySelector("p");
target.replaceChild(fragment, toReplace);

// 5. 다른 노드에 옮겨 삽입
document.body.appendChild(fragment);
```
---

## ✅ 정리

| 사용 목적                  | 적절한 메서드                            |
|---------------------------|------------------------------------------|
| **전체 내용을 단순 교체**      | `innerHTML`                              |
| **지정 위치에 HTML 삽입**     | `insertAdjacentHTML()`                   |
| **보안 고려 + 세밀한 DOM 조작** | `createRange().createContextualFragment()` |