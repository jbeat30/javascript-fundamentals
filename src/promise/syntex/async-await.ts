(async ()=>{
  // 👉 async/await는 Promise를 좀 더 "동기 코드처럼" 보이게 해주는 문법

  // 단일 비동기 작업 기다리기 (await 한 번)
  const getUser = async () => {
    // -> 유저 정보를 받아오는 가짜 비동기 함수
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("사용자 정보");
      }, 1000); // 1초 뒤에 응답
    });
  };

  const runSingle = async () => {
    console.log("사용자 정보 가져오는 중...");
    const user = await getUser(); // -> getUser가 끝날 때까지 기다림
    console.log("결과:", user); // 👉 "사용자 정보"
  };

  await runSingle();


  // 여러 비동기 작업을 병렬로 실행하고 기다리기 (Promise.all)
  const fetchPosts = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("게시글 데이터");
      }, 2000); // 2초 걸림
    });
  };

  const fetchComments = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("댓글 데이터");
      }, 1500); // 1.5초 걸림
    });
  };

  const runParallel = async () => {
    console.log("게시글과 댓글 가져오는 중...");

    // -> 병렬로 처리, 둘 다 끝날 때까지 기다림
    const [posts, comments] = await Promise.all([
      fetchPosts(),
      fetchComments(),
    ]);

    console.log("게시글:", posts); // 👉 "게시글 데이터"
    console.log("댓글:", comments); // 👉 "댓글 데이터"
  };

  await runParallel();
})()