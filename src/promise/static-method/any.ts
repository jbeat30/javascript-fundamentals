(()=>{
  // -> 성공한 것 중 가장 먼저 끝난 걸 반환
// -> 전부 실패해야만 reject됨
  const a = Promise.reject("에러1");
  const b = Promise.resolve("성공2");
  const c = Promise.resolve("성공3");

  Promise.any([a, b, c]).then((result) => {
    console.log(result); // 👉 "성공2"
  });

// -> 전부 실패하면 AggregateError로 reject됨
  Promise.any([
    Promise.reject("에러1"),
    Promise.reject("에러2"),
  ]).catch((err) => {
    console.error(err); // 👉 AggregateError: All promises were rejected
  });
})()