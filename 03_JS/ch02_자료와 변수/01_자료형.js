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
console.log(hello.length)
//.다음 method나 attribute를 선택할 수 있으며, method의 경우 괄호를 사용해야한다.