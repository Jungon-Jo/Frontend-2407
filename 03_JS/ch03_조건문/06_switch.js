// 여러개 값중에 하나를 선택, 변수를 반드시 작성해주자
let score = Math.ceil(Math.random() * 50) + 50;       // 51 ~ 100 사이의 정수
let grade = ''
let sign = ''

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

switch((score / 10 - parseInt(score / 10)) * 10) {
  case 10:
  case 9:
  case 8:
  case 7:
    sign = '+';
    break                                             // switch 문을 벗어나게 해준다.
  case 6:
  case 5:
  case 4:
  case 3:
    sign = '0';
    break
  case 2:
  case 1:
  case 0:
    sign = '-';
}
console.log(`점수: ${score}, 학점: ${grade} ${sign}`)