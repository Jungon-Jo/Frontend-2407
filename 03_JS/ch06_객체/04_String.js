// String 객체(Method 정도는 기억해주는게 좋다)

let hello = '안녕하세요?';

// 속성
console.log(hello.length);

// 메소드(method)
console.log(hello[2], hello.charAt(2));    // '하'
console.log(hello + '여러분!', hello.concat('여러분!'));
console.log(hello.indexOf('세요'), hello.indexOf('가'));    // 3, -1 동일 문자가 있을 경우 1이상의 정수, 없을 경우 0 또는 -1 이 표시된다.
console.log(hello.includes('세요'))
console.log('pineapple'.lastIndexOf('p'))

// 문자열을 분리하여 배열을 생성
let fruits = '수박 참외 포도';
let fruitArray = fruits.split(' ');
console.log(fruitArray);              // ['수박', '참외', '포도']

// 문자열 일부분(substring)
let today = new Date().toISOString(); // 2024-07-19T02:13:13.757Z
console.log(today);

// 날짜 추출 - 2024-07-19
console.log(today.substring(0, 10))       // substring(시작하는것은 포함(>=), 마지막은 미포함(<))

// 시간 추출 - 02:13:13
console.log(today.substring(11, 19))      // 11에서 출발해 8글자를 읽는다.
console.log(new Date().toLocaleString()); // 2024. 7. 19. 오전 11:21:11
console.log(new Date().toLocaleString().substring(16));     // 인덱스 16부터 끝까지

// 공백 제거
let space = ' Hello?    World.  \r\n';    // 양쪽의 White space: 공백, 탭, \r, \n
console.log(space)
console.log(space.trim());

// Method chaining
console.log(space.trim().substring(0,5).toUpperCase());

// 문자열 변환
let sample = 'A quick brown fox';
console.log(sample.replace('A', 'The'))
console.log(sample.replace('o', '0'))       // 앞에 하나만 바뀐다.

// 정규표현식(Regular Expression)
sample = 'A quick brown fox - 3 - 갈색의 재빠른 여우 the lazy dog = 5 = 개으른 개';
// 영문자와 공백만 남기고 모두 지움
console.log(sample.replace(/[^A-Z a-z]/g, ''));    // ^는 해당 내용을 제외하고라는 의미가 있음
// 한글과 공백만 남기고 모두 지움
console.log(sample.replace(/[^가-힣 ㄱ-ㅎ ㅏ-ㅣ]/g, ''));
// 숫자만 남기고 모두 지움
console.log(sample.replace(/[^0-9-=]/g, ''));