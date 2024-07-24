// 타이머 내장 함수
// 서로 각자 자기 할일만 수행한다.
setTimeout(function() {
  console.log('3초 경과');
}, 3000);

const si = setInterval(() => {
  console.log(new Date())
}, 1000)

setTimeout(() =>{
  console.log('5초 경과후 초시계 정지시킴');
  clearInterval(si);
}, 5000);
// js의 최대 단점은 비동기 언어라는 것이다.
// 일반적으로 프로그래은 순차적으로 하나씩 실행하지만, js는 동시 실행한다.
// (동시까지는 아니더라도 앞선 수행이 끝나기 전에 다음 프로그램을 실행)
// 이러한 이유로 js는 callBack을 사용한다.