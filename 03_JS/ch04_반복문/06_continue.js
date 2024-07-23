// 1 ~ 10 홀수의 합 (continue는 해당 조건에 부합하는 loop를 건너뛰기 위함)
let sumOdd = 0
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1)
        sumOdd += i
}
console.log(sumOdd)

sumOdd = 0
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0)
        continue;
    sumOdd += i
}
console.log(sumOdd)

sumOdd = 0
for (let i = 1; i)