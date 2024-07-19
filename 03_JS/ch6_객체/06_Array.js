// Array 객체

// 배열 생성
let fruits = ['apple', 'banana', 'cherry'];
let cars = new Array('Audi', 'Benz', 'BMW');
console.log(cars);

// 배열 메소드
// concat() --> 서로 연결하는 것/비 파괴적 method 자기 자신은 멀쩡하다.
let newFruits = fruits.concat('mango', 'orange');
console.log(newFruits, fruits);

// join() - 문자열로 만들어주는 method
console.log(`내가 갖고 싶은 차는 ${cars.join(', ')} 입니다.`);

// pop()* - 맨 뒤에 있는 요소를 끄집어 내고, 파괴적 매소드
console.log(cars.pop());
console.log(cars);

// push()* - 맨 뒤에 있는 요소를 파괴하고 추가
cars.push('Volvo'); cars.push('Hyundai');
console.log(cars)

// reverse()* - 순서 뒤집기
cars.reverse();
console.log(cars);

// sort()* - 정렬
let numbers = [34, 25, 89, 7, 45, 55, 19]
// 오름차순(Ascending order) --> 문자열을 sorting 하는데 기준이 맞춰져 있다.
numbers.sort()
console.log(numbers)

cars.sort()
console.log(cars);

// numbers.sort((a, b) => a - b);
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers)

// 오름차순 (Ascending order)
// numbers.sort((a, b) => a - b);
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// 내림차순 (Descending order)
// numbers.sort((a, b) => b - a)
numbers.sort(function(a, b) {
  return b - a;
})
console.log(numbers);

//slice()
console.log(fruits);
console.log(fruits.slice(1, 3));
