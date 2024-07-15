/*
 *자바스크립트의 자료형
 */

//1. 문자열(String)
console.log("He said 'I love you.'");
console.log('He said "I love you."');
//"안의 '는 글자로 취급된다.
console.log("I'll be back.")

//특수문자 - 백슬래쉬(\) + 문자
console.log("\ttabc\tdef\"ghi\njk1")

//문자열 연산자(+)
console.log('가나다' + ' ' + '라마바')

//문자열 선택 "let" or "var"를 사용한다.(과거엔 var을 많이 썼지만 최근에는 let을 주로 쓴다.)
let hello = '안녕하세요?';
console.log(hello, hello[0], hello[3])
//숫자를 1부터 세냐 0부터 세냐 다르고, db가 대표적으로 1부터 시작한다.
//안녕하세요?에서 첫번째[0]문자와 네번째[3]를 표현한다.

//문자열 길이
console.log(hello.length, hello.charAt(0), hello.charAt(3))
//"문자열" + "." = method나 attribute(속성)을 사용 할 수 있으며, method의 경우 괄호를 사용해야한다.

//한 문장 내 '나 "중 하나를 두번 사용하면 erro가 난다.
//상단의 값 모두 표현이 안된다.
//console.log('He said 'I love you.'')
console.log('He said "I love you."')
let d = "this is 'string'";

//template literal
console.log(hello + '문자열의 길이는' + hello.length + '입니다.');
console.log(`${hello} 문자열의 길이는 ${hello.length} 입니다.`);

//2. 숫자(Number)
//자바스크립트에서는 정수형(integer), 실수형(floting point)을 구분하지 않는다.
let a = 3, b = 4;
console.log(a + b, a - b, a * b, a / b, b % a);
let pi = 0.314159e1;      //0.314159 x 10 ** 1(**제곱을 의미한다.)
let f = 1.3e-8;       //1.3 x 10 ** -8
console.log(pi, f);
//b를 a로 나눈 나머지(b % a)

//3. 논리형(Boolean) - true, false

//비교 연산
console.log(a>b, 10 === 10.0); // = = = : 타입과 값이 같을 때 참, 자바스크립트에서는 숫자를 number 하나로 입력
console.log(10 == '10', 10 === '10'); // true, false
//!true, !false = false, true 로 표현

//논리 연산
let x = 10;
console.log(x > 8 || x < 0);
console.log(x > 0 && x < 8);

//자료형 검사
console.log(typeof hello, typeof(a), typeof(true), typeof(d));