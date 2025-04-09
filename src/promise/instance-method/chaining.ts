(()=>{
  // -> 비동기 작업을 시뮬레이션 (1초 후에 성공한다고 가정)
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // -> 여기서 resolve를 호출하면 then으로 연결됨
        resolve("서버에서 받은 데이터");
        // -> 혹은 실패를 시뮬레이션하려면 reject("에러 발생")로 바꾸면 됨
      }, 1000);
    });
  };

// -> fetchData는 Promise를 반환함
  fetchData()
      // -> 성공했을 때 실행됨. resolve로 받은 값을 data로 전달받음
      .then((data) => console.log(data))
      // -> 실패했을 때 실행됨. reject로 받은 값을 err로 전달받음
      .catch((err) => console.error(err))
      // -> 성공/실패와 상관없이 항상 마지막에 실행됨
      .finally(() => console.log("작업 완료"));
})()