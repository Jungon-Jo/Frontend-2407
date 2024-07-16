/*
 *
 */
// 윤년(Leap Year)
// 4로 나누어지면 윤년, 100년으로 나누어지면 평년, 400으로 나누어지면 윤년

let year = 2204;
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log(`${year}년은 윤년입니다.`)
        } else {
          console.log(`${year}년은 평년입니다.`)
        }
    } else {
      console.log(`${year}년은 윤년입니다.`)
    }
} else {
  console.log(`${year}년은 평년입니다.`)
}

// refactoring: code를 개선할 필요가 있다.
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
    console.log(`${year}년은 윤년입니다.`);
else
    console.log(`${year}년은 평년입니다.`)