/*
* async/await 사용한 비동기 처리
* */

// 순차적 처리
async function getAsyncData(): Promise<void> {
  try {
    const response: Response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data: any = await response.json();
    console.log('getAsyncData ::')
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
// 병렬 처리
async function getAsyncData2(): Promise<void> {
  try {
    // 병렬로 두 개의 비동기 요청 실행
    const [todoData, userData] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json())
    ]);

    // 두 요청의 결과를 출력
    console.log('getAsyncData2 ::')
    console.log('Todo Data:', todoData);
    console.log('User Data:', userData);
  } catch (error) {
    console.error('Error:', error);
  }
}

/*
* Promise 체이닝을 사용한 비동기 처리
* fetch() 함수는 기본적으로 Promise를 반환해서 then() 메서드를 사용하여 비동기 처리를 할 수 있음
* */

// Promise 체이닝
function getAsyncData3(): void {
  // 'fetch'를 사용하여 데이터를 비동기적으로 가져옴
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response: Response) => {
        // 응답(response)을 JSON 형식으로 변환
        return response.json();
      })
      .then((data: any) => {
        // 변환된 데이터를 처리
        console.log('getAsyncData3 ::')
        console.log(data);
      })
      .catch((error: any) => {
        // 체이닝 도중 발생한 오류를 처리
        console.error(error);
      });
}

// Promise 병렬작업
function getAsyncData4(): Promise<void> {
  // Promise.all을 사용하여 두 개의 fetch 요청을 병렬로 처리
  return Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos/1'), // 첫 번째 요청
    fetch('https://jsonplaceholder.typicode.com/users/1')  // 두 번째 요청
  ])
      .then((responses) => {
        // 두 요청이 완료되면 responses 배열에 Response 객체들이 담김
        // 각 Response를 JSON 형식으로 변환하여 Promise.all로 처리
        return Promise.all(responses.map((response: Response) => response.json()));
      })
      .then((data) => {
        // 병렬 처리된 데이터를 처리
        const todoData = data[0]; // 첫 번째 요청의 결과 (todos/1)
        const userData = data[1]; // 두 번째 요청의 결과 (users/1)

        console.log('getAsyncData4 ::')
        console.log('Todo Data:', todoData);
        console.log('User Data:', userData);
      })
      .catch((error) => {
        // 병렬 요청 도중 발생한 오류를 처리
        console.error('Error:', error);
      });
}

getAsyncData()
getAsyncData2()
getAsyncData3()
getAsyncData4()