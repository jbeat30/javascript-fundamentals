(()=>{
  // -> Promise.resolve()는 주어진 값을 resolve하는 Promise를 반환
// -> 즉, 주어진 값이 Promise인 경우 그 Promise를 반환하고,
// -> Promise가 아닌 경우에는 주어진 값을 resolve하는 Promise를 반환
  const resolved = Promise.resolve("임의로 박은 성공 결과");

  resolved.then((v) => {
    console.log(v); // 👉 "임의로 박은 성공 결과"
  });

// -> 비동기 작업이 끝났을 때 성공 결과를 넘길 때 사용
// -> 실제 네트워크 요청, 파일 처리 등에서 이렇게 쓰임
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // -> 뭔가 잘 됐다고 가정
        resolve("데이터 도착");
      }, 1000);
    });
  };

  fetchData().then((data) => {
    console.log(data); // 👉 "데이터 도착"
  });
})()