(()=>{
  // -> 여러 Promise들을 동시에 실행하고 전부 성공해야 결과 반환
// -> 하나라도 실패하면 전체가 reject됨
  const p1 = Promise.resolve(1);
  const p2 = Promise.resolve(2);
  const p3 = Promise.resolve(3);

// 병렬로 실행 -> 먼저 끝나는 것부터 결과를 모아서 배열로 반환
  Promise.all([p1, p2, p3]).then((results) => {
    console.log(results); // 👉 [1, 2, 3]
  });

// -> 실패가 하나라도 있으면 전체가 reject됨
  const good = Promise.resolve("ok");
  const bad = Promise.reject("문제 발생");

  Promise.all([good, bad])
      .then((results) => {
        console.log(results); // ❌ 실행 안 됨
      })
      .catch((err) => {
        console.error(err); // 👉 "문제 발생"
      });
})()