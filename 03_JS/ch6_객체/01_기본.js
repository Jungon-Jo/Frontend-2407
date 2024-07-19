/*
 * 객체(object)
 */

// 1. 자료구조의 의미 - 파이썬의 딕셔너리, 자바의 맵과 유사함
//    키, 밸류 조합
let personArray = ['James', 27, '남자', '프로그래머', 175.2]
let personObject = { name: 'James', age: 27, gender: '남자', job: '프로그래머', height: 175.2}

// 2. '객체' 자체 의미 - 속성(attribute)과 메소드(method/객체가 할 수 있는 일) 사물을 묘사
//                     js는 객체 지향 언어가 아닌 지원하는 언어다.

const pet = {
  name: '구름',
  eat: function(food = '뼈다귀') {
    console.log(`${food} 을/를 먹습니다.`)
  }
}

console.log(pet.name);        // 개체의 속성을 사용
pet.eat('간식');                    // 객체의 method를 사용

// 객체에 대한 접근
console.log(personObject.job)       // 이렇게 사용하는 것이 일반적
console.log(personObject['job'])    // 이런식으로는 사용하지 않음  
let key = 'job';
console.log(personObject[key]);     // key 값을 변수로 사용하는 경우

// 배열은 객체의 특수한 형태
console.log(typeof personArray);
let fruitArray = ['감', '밤', '배'];
let fruitObject = {0: '감', 1: '밤', 2: '배'}