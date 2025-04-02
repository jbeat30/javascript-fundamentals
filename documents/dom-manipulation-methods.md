# 📌 DOM 조작 메서드 정리

## 1. `innerHTML`
- 해당 요소의 **전체 HTML을 변경**함.
- 문자열을 그대로 넣으면 **기존 내용을 완전히 덮어씀**.
- `innerHTML +=` 사용 시 기존 내용 뒤에 추가 가능하지만 **재렌더링 비용이 큼**.

## 2. `insertAdjacentHTML(position, htmlString)`
- 기존 내용을 덮어쓰지 않고, **지정한 위치에 새로운 HTML 삽입**.
- `position` 값:
    - `"beforebegin"` → 요소 **앞에 삽입**
    - `"afterbegin"` → 요소 **안쪽 맨 앞에 삽입**
    - `"beforeend"` → 요소 **안쪽 맨 뒤에 삽입**
    - `"afterend"` → 요소 **뒤에 삽입**
- **전체 내용을 다시 파싱하지 않아 성능이 더 좋음**.

## 3. `document.createRange().createContextualFragment(htmlString)`
- HTML 문자열을 **실제 DOM 노드(Fragment)로 변환**.
- `appendChild()`, `insertBefore()` 등을 사용해 원하는 위치에 삽입 가능.
- 기존 `innerHTML`처럼 문자열을 직접 삽입하는 것이 아니라 **DOM 노드를 생성하여 조작 가능**.
- **보안적으로 더 안전** (`<script>` 실행 방지 가능).

---

## ✅ 결론
| 사용 목적 | 적절한 메서드 |
|-----------|-------------|
| **단순히 HTML 변경** | `innerHTML` |
| **특정 위치에 삽입** | `insertAdjacentHTML()` |
| **DOM 조작 & 보안 고려** | `createRange().createContextualFragment()` |
