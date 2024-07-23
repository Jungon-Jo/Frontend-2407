// 약수 구하기
let num = 12
let divisors = [];
for (let i = 1; i <= 12; i++) {
  if (num % i == 0)
    divisors.push(i);
  }
  console.log(divisors);

// 소수(prime number) 판별(소수를 제외함으로써 약수를 구하는 방법)
for (let i = 0; i < num; i++) {
  if (num % i == 0) {
    console.log(`${num} 은/는 소수가 아닙니다.`);
    break;
  }
}

// 소수를 구할때는 "1"과 "자기자신"을 포함하지 않는 정수로 나누어 지지 않는 수
let numbers = [5, 11, 17, 23, 27];
for (num of numbers) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      console.log(`${num} 은/는 소수가 아닙니다.`);
      break;
    }
  }
}
