(()=>{
  // -> Promise.reject()는 거부된(rejected) 상태의 Promise를 반환
// -> 강제로 에러를 발생시키는 상황 등에 사용
  const rejected = Promise.reject("에러 강제 발생");

  rejected.catch((err) => {
    console.error(err); // 👉 "에러 강제 발생"
  });

// -> 작업 중 뭔가 문제가 생겼을 때 reject로 에러 전달
// -> 보통 try-catch 없이 then-catch로 에러 잡을 때 유용
  const fetchWithError = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // -> 실패한 상황이라고 가정
        reject("데이터 받기 실패");
      }, 1000);
    });
  };

  fetchWithError()
      .then((data) => {
        console.log(data); // ❌ 여긴 안 옴
      })
      .catch((err) => {
        console.error(err); // 👉 "데이터 받기 실패"
      });
})()