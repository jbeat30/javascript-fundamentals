/*
* async/await 사용한 비동기 처리
* */
async function getAsyncData(): Promise<void> {
  try {
    const response: Response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data: any = await response.json();
    console.log('Test code 2 ::')
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

/*
* Promise 체이닝을 사용한 비동기 처리
* fetch() 함수는 기본적으로 Promise를 반환해서 then() 메서드를 사용하여 비동기 처리를 할 수 있음
* */
function getAsyncData2(): void {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response: Response) => response.json())
      .then((data: any) => {
        console.log('Test code 1 ::')
        console.log(data)
      })
      .catch((error: any) => console.error(error));
}
function getAsyncData3(): Promise<void> {
  return Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos/1'),
    fetch('https://jsonplaceholder.typicode.com/users/1')
  ])
      .then((responses) => {
        // 두 요청이 모두 완료되면 responses 배열에 결과가 담김
        return Promise.all(responses.map((response: Response) => response.json()));
      })
      .then((data) => {
        const todoData = data[0]; // 첫 번째 요청 (todos/1)
        const userData = data[1]; // 두 번째 요청 (users/1)

        console.log('Todo Data:', todoData);
        console.log('User Data:', userData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}

getAsyncData()
getAsyncData2()
getAsyncData3()