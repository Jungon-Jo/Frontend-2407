// 현재 날짜 및 시간을 아는 방법
let today = new Date();       // Date라는 class가 존재하며, new라는 연산자는 하나의 instance를 만들어낸다.
console.log(today)            // 2024-07-16T01:07:58.606Z, Time Zone의 문제가 존재(Zulu 기준/그리니치 천문대)
let hour = today.getHours();
console.log(hour);            // 10
console.log(new Date().getHours());

if (hour < 12)                // hour는 23시 까지 표시된다.
  console.log(`오전 ${hour}시 ${today.getMinutes()}분 입니다.`)
else
  console.log(`오후 ${hour - 12}시 ${today.getMinutes()}분 입니다.`)

console.log(`${today.getFullYear()} - ${today.getMonth() + 1} - ${today.getDate()}`)    // getMonth를 사용할 때는 +1을 해준다.
console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
