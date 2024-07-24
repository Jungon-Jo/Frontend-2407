// JSON - JavaScript Object Notation (자바스크립트를 표현하는 방법)
// 이 기종 컴퓨터 간 데이터를 주고받는 표준 - XML(Extensible Markup Language)
// 실제로는 JSON이 업계 표준임(de facto standard)

let name = 'James', age = 27, job = '프로그래머';
let person = {name: name, age: age, job: job};
let newPerson = {name, age, job};                   //key 이름과 변수명이 같으면 하나만 사용가능
console.log(person, newPerson)

let externalForm = JSON.stringify(person);
console.log(externalForm);

let internalForm = JSON.parse(externalForm);        // 외부로 내보낼때는 'stringify', 받아올때는 'parse'
console.log(internalForm);

let personArray = [person, newPerson, {name: 'Maria', age: 25, job: 'Designer'}]
console.log(JSON.stringify(personArray));
console.log(personArray);                          
// 정렬 기준을 전달해줄때, 'comparator'를 사용한다.
// (a, b) => a - b 오름차순
// (a, b) => b - a 내림차순
// p.sort((a, b) => a.id - b.id);        --> id의 오름차순
// p.sort((a, b) => b.age - a.age);        --> age의 내림차순

// API - Application Programmin Interface