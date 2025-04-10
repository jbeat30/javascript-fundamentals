(() => {
  // 참고용 기본 정보를 가진 객체 생성
  const baseInfo = { name: '기본 이름' };

  // baseInfo를 prototype으로 삼아 새로운 객체 생성
  // 프로토타입이란 '객체의 부모'라고 생각하면 됨
  const myInfo = Object.create(baseInfo); // baseInfo를 부모로 가진 새로운 객체 생성
  myInfo.age = 25; // 자신의 속성 추가
  myInfo.job = '개발자'; // 자신의 속성 추가

  // myInfo 객체의 속성 확인
  console.log(myInfo); // { age: 25, job: '개발자' }
  // baseInfo 객체의 속성 확인
  console.log(baseInfo); // { name: '기본 이름' }
  // myInfo 객체의 prototype 확인 => __proto__ 속성을 통해 myInfo의 부모 객체(baseInfo) 접근 가능
  console.log(myInfo.__proto__); // { name: '기본 이름' }

  /*
    for...in → prototype(참조한 객체)의 속성도 포함되기 때문에 주의 필요

    hasOwnProperty() 메서드를 사용하면
    - 해당 속성이 '자신의 것인지(직접 가진 것인지)' 확인 가능
    - prototype에서 상속받은 속성은 제외할 수 있음
  */
  for (const key in myInfo) {
    if (myInfo.hasOwnProperty(key)) {
      // 자신이 직접 가진 속성만 출력
      console.log(`[own] ${key}: ${myInfo[key]}`);
    } else {
      // prototype에서 상속받은 속성
      console.log(`[inherited] ${key}: ${myInfo[key]}`);
    }
  }
  // hasOwnProperty 메서드 사용 예시
  console.group('hasOwnProperty 메서드 사용 예시');
    console.log(myInfo.hasOwnProperty('name')); // false (baseInfo의 속성)
    console.log(myInfo.hasOwnProperty('age')); // true (myInfo의 자신의 속성)
    console.log(myInfo.hasOwnProperty('job')); // true (myInfo의 자신의 속성)
    console.log(myInfo.hasOwnProperty('toString')); // false (Object의 기본 메서드)
    console.log(myInfo.hasOwnProperty('hasOwnProperty')); // false (Object의 기본 메서드)
    console.log(myInfo.hasOwnProperty('__proto__')); // false (Object의 기본 속성)
    console.log(myInfo.hasOwnProperty('constructor')); // false (Object의 기본 속성)
  console.groupEnd();
  // in 연산자 사용 예시 => in은 prototype 체인까지 탐색하기 때문에 그냥 가지고만있으면 true 를 반환함
  console.group('in 연산자 사용 예시');
    console.log('name' in myInfo); // true (baseInfo의 속성)
    console.log('age' in myInfo); // true (myInfo의 자신의 속성)
    console.log('job' in myInfo); // true (myInfo의 자신의 속성)
    console.log('toString' in myInfo); // true (Object의 기본 메서드)
    console.log('hasOwnProperty' in myInfo); // true (Object의 기본 메서드)
    console.log('__proto__' in myInfo); // true (Object의 기본 속성)
  console.groupEnd();

  // 결론: hasOwnProperty()는 객체의 고유 속성을 확인하는 데 유용함
  // in 연산자는 객체의 모든 속성을 확인하는 데 유용함
})();