/*
 *      if ()
 *      else if ()
 *      ...
 *      else
 */
// score
let score = Math.ceil(Math.random() * 60) + 40;       // 41 ~ 100 사이의 정수
let grade = '';

if (score >= 90)
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C';
else if (score >= 60)
    grade = 'D';
else
    grade = 'F';

console.log(`점수: ${score}, 학점: ${grade}`);

// FizzBuzz
// 숫자가 5로 나누어지면 Fizz, 7로 나누어지면 Buzz, 5와 7 둘다 나누어지면 FizzBuzz 출력
let num = Math.ceil(Math.random() * 100)
let output = ''

if (num % 5 == 0 && num % 7 != 0)
    output = 'Fizz';
else if (num % 7 == 0 && num % 5 != 0)
    output = 'Buzz';
else if (num % 35 == 0)
    output = 'FizzBuzz';
else
    output = 'nothing';

console.log(`숫자${num}, ${output}`);

// 35로 나누었을때 나머지가 0이냐에 대한 조건을 제일 앞에 써주면, 제일 먼저 입력된 값으로 인식되어 굳이 != 코드를 사용할 필요가 없어진다.