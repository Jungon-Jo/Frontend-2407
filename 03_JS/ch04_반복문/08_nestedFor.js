// 중첩(nested) for 반복문

// 1. 별 5개를 여섯줄 그리기
for (let i = 0; i < 6; i++) {
  let line = '';
  for (let k = 1; k < 5; k++) {
    line += '*';
  }
  console.log(line);
}

// 2. 디지털 시계를 매 10분마다 표시하기
for (let hour = 0; hour <= 23; hour++) {
  for (let minute = 0; minute <60; minute++) {
    if (minute % 10 == 0)
      console.log(`${hour}:${minute}`);
  }
}