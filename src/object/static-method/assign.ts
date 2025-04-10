(() => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };

  /*
    Object.assign(target, ...sources)
    - 하나 이상의 source 객체를 target 객체에 병합함
    - target 객체를 직접 변경하고, 병합된 객체를 반환함
    - 같은 key가 있을 경우, 나중에 오는 값으로 덮어씀
    - 깊은 복사가 아닌 '얕은 복사'만 수행됨 (중첩된 객체는 참조 주소만 복사됨)

    아래는 병합 과정:
    1. 빈 객체 {} → 대상 객체 (얕은 복사 기준점)
    2. obj1의 속성 복사: { a: 1, b: 2 }
    3. obj2의 속성 복사: b는 이미 있으므로 3으로 덮어씀 → 최종 결과: { a: 1, b: 3, c: 4 }
  */
  const mergedObj = Object.assign({}, obj1, obj2);

  console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

  // 원본 객체 확인
  console.log(obj1); // { a: 1, b: 2 } → 원본은 변하지 않음

  const baseMergedObj = Object.assign(obj1, obj2); // obj1을 직접 변경
  console.log(baseMergedObj); // Output: { a: 1, b: 3, c: 4 }
  console.log(obj1); // Output: { a: 1, b: 3, c: 4 } → obj1이 변경됨
})();