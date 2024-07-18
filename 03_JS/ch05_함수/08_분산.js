// function sumOfSquare(arr) {          -> sumOfSquare: 1의 제곱 + 2의 제곱 + 3의 제곱 + ...
//   
// }
// function squarOfsum(arr) {           -> squareOfSum: (1 + 2 + 3 + ...)의 제곱
// 
// }

// 배열 원소 각각의 제곱의 합
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function sumOfSquare (arr) {
  let sum = 0;                           // -> 루프값을 돌기전에 초기 값 설정 필요
  for (let num of arr)
    sum += num ** 2;
  return sum;
}

// 배열 원소의 합의 제곱
function squareOfSum(arr) {
  let sum = 0
  for (let num of arr)
    sum += num;
  return sum * sum
}

console.log(`제곱의 합은 ${sumOfSquare(arr)}, 합의 제곱은 ${squareOfSum(arr)}`)

let variance = sumOfSquare(arr) / arr.length - squareOfSum(arr) / arr.length ** 2;
console.log(variance)