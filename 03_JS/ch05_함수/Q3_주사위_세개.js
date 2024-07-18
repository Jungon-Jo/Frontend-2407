// 주사위 3개 - 백준도장 2480
let a = Math.ceil(Math.random() * 6)
let b = Math.ceil(Math.random() * 6)
let c = Math.ceil(Math.random() * 6)
let n;
n = (a == b && b == c) ? (10000 + (a * 1000)) :
    (a == b) ? (1000 + (a * 100)) :
    (a == c) ? (1000 + (a * 100)) :
    (c == b) ? (1000 + (c * 100)) :
    Math.max(a, b, c) * 100;

console.log(`(${a}, ${b}, ${c}), Total price: ${n}`)

//선생님 풀이
let dice1 = Math.ceil(Math.random() * 6)
let dice2 = Math.ceil(Math.random() * 6)
let dice3 = Math.ceil(Math.random() * 6)
let prize = 0

if (dice1 == dice2 && dice2 == dice3)
    prize = 10000 + 1000 * dice1;
else if (dice1 == dice2)
    prize = 1000 + 100 * dice1;
else if (dice1 == dice3)
    prize = 1000 + 100 * dice1;
else if (dice2 == dice3)
    prize = 1000 + 100 * dice1;
else {
    Math.max(a, b, c) * 100 
}

console.log(`(${a}, ${b}, ${c}), Total price: ${n}`)

// 조건문 계산 시 &&의 경우 앞의 조건이 false가 나올 경우 뒤에 계산이 진행이 안됨//
// ||의 경우 앞에 계산식이 true라면 뒤에 계산을 진행하지 않음//
