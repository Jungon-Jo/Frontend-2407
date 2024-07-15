/*
 * 상수(Constant)와 변수(Variable)
 */

// 상수
const PI = 3.141592;
let radius = 10;
console.log(`반지름이 ${radius}인 원의 둘레는 ${2 * PI * radius}, 면적은 ${PI * radius ** 2}입니다.`);

// PI = 3.1415926535;         //상수에 값을 할당하면 에러 발생

// 변수 - 전역변수(var/전체에서 유효한 변수), 로컬변수(let/지정구역 내에서만 유효한 변수)
radius = 5; // 변수였음으로 얼마든지 값을 변화시킬 수 있다.

// function area {
//   let radius = 5;
//   return PI * radius ** 2;
//}   
// 특정 구역 내 상수값 변경은 가능하다.

// 복합 대입 연산자
let a = 0, str = ''
a += 1; a += 2; a += 3;   // a <- a + 1
console.log(a);
str += 'A quick brown fox ';
str += 'jumps over the lazy dog.';     // str = str + 'A quick brown fox '
console.log(str);

// 증감 연산자
let x = 0, y = 0
console.log(x++, ++y); // 조회 후 1 증가(post-increment), 조회 전 1 증가(pre-increment)
console.log(x, y);
console.log(x--, --y);
console.log(x, y);

// 4. undefined 자료형
let c;
console.log(typeof(abc), typeof(c), typeof(a));     // 선언하지 않은 변수, 값을 초기화 하지 않은 변수

// 자료형 변환
console.log(Number('123')), parseInt('123'), typeof Number('123');
console.log(String(123), typeof String(123));
console.log(Boolean(1), typeof Boolean(1), Boolean([]), Boolean({}));
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined));
// 마지막 줄은 모두 false다.

// 자동 자료 변환
console.log("ABC" + 100 + true);      // 표현범위가 작은 것이 큰 것으로 자동 변환됨
console.log(100 + true);
console.log(typeof !!x);      // react에서 많이 사용하며, Java에서는 사용하지 않는다.

// 인치를 센치로 변환
let inch = '32';
console.log(2.54 * Number(inch))