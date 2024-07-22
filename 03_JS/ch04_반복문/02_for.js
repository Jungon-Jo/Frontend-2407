// for 반복문

let summerFruits = ['수박', '참외', '복숭아', '포도'];

for (let i = 0; i <= 3; i++) {
  console.log(i, summerFruits[i]);
}

for (let i = 0; i < 4; i++) {
  console.log(i, summerFruits[i]);
}

for (let i = 0; i <= summerFruits.length; i++) {
  console.log(i, summerFruits[i]);
}

// 1에서 100사이의 정수의 합 구하기
let num = 0
for (let i = 0; i <= 100; i++) {
  num += i
}
console.log(`1에서 100사이의 정수의 합 = ${num}`);

// 1에서 100사이의 홀수의 합 구하기
let sumOdd_0 = 0
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1)
    sumOdd_0 += i
}
console.log(`1에서 100사이의 홀수의 합 = ${sumOdd_0}`)

let sumOdd_1 = 0
for (let i = 1; i <= 100; i += 2) {
  sumOdd_1 += i
}
console.log(`1에서 100사이의 홀수의 합 = ${sumOdd_1}`)

// 1에서 100사이의 짝수의 합 구하기
let sumEven_0 = 0
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0)
    sumEven_0 += i
}
console.log(`1에서 100사이의 짝수의 합 = ${sumEven_0}`)

let sumEven_1 = 0
for (let i = 2; i <= 100; i += 2) {
  sumEven_1 += i
}
console.log(`1에서 100사이의 짝수의 합 = ${sumEven_1}`)

// 1에서 100사이의 3의 배수의 합
let sum3_0 = 0
for (i = 0; i <= 100; i++) {
  if (i % 3 == 0)
    sum3_0 += i
}
console.log(`1에서 100사이의 3의 배수의 합 = ${sum3_0}`);

let sum3_1 = 0
for (i = 3; i <= 100; i += 3) {
  sum3_1 += i
}
console.log(`1에서 100사이의 3의 배수의 합 = ${sum3_1}`);

// 100에서 200 사이의 5의 배수의 합
let sum5 = 0
for (i = 100; 100 <= i <=200; i += 5) {
  sum5 += i
}
console.log(`100에서 200사이의 5의 배수의 합 = ${sum5}`)