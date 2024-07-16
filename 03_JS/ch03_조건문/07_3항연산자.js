/*
 * 3항 연산자
 */ 

let dice = Math.ceil(Math.random() * 6);
let result = ''
if (dice % 2 == 0)
    result = '짝수';
else
    result = '홀수';
console.log(`${dice} 은/는 ${result}입니다.`);

let evenOdd = dice % 2 == 0 ? '짝수' : '홀수';
console.log(`${dice} 은/는 ${evenOdd}입니다.`);

let smallBid = dice <= 3 ? '작은 수' : '큰 수';
console.log(`${dice} 은/는 ${smallBid}입니다.`);

let score = Math.ceil(Math.random() * 50) + 50;
let sign = score >= 10 ? '+' : score >= 3 ? '0' : '-'

switch(parseInt(score / 10)) {                        // score 값은 5, 6, 7, 8, 9, 10으로 변환됨(소수점 자리를 버린다.)
        case 10:
        case 9:
        grade = 'A';
        break                                             // switch 문을 벗어나게 해준다.
        case 8:
        grade = 'B';
        break
        case 7:
        grade = 'C';
        break
        case 6:
        grade = 'D';
        break
        default:
        grade = 'F'
        break
}

console.log(`점수: ${score}, 학점: ${grade} ${sign}`)