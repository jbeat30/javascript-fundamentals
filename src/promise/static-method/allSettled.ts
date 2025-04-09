(()=>{
  // -> 성공이든 실패든 모두 결과를 배열로 줌
// -> 전체 상태를 다 확인하고 싶을 때 좋음
  const one = Promise.resolve("성공");
  const two = Promise.reject("실패");

  Promise.allSettled([one, two]).then((results) => {
    console.log(results);
    /*
    👉 [
      { status: "fulfilled", value: "성공" },
      { status: "rejected", reason: "실패" }
    ]
    */
  });
})()