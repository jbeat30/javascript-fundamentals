(()=>{
  // -> 제일 먼저 끝난 Promise 하나의 결과만 반환
// -> 타임아웃 처리 등에 자주 사용됨
  const slow = new Promise((res) => setTimeout(() => res("느림"), 2000));
  const fast = new Promise((res) => setTimeout(() => res("빠름"), 500));

  Promise.race([slow, fast]).then((result) => {
    console.log(result); // 👉 "빠름"
  });
})()