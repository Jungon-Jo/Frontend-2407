// String 객체

let hello = '안녕하세요?';

// 속성
console.log(hello.length);

// 메소드(method)
console.log(hello[2], hello.charAt(2));    // '하'
console.log(hello + '여러분!', hello.concat('여러분!'));
console.log(hello.indexOf('세요'), hello.indexOf('가'));    // 3, -1 동일 문자가 있을 경우 1이상의 정수, 없을 경우 0 또는 -1 이 표시된다.
console.log(hello.includes('세요'))
console.log('pineapple'.lastIndexOf('p'))