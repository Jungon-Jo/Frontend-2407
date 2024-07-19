// 표준 내장 객체 - Number
let num = 273;
let numberFromConstructor = new Number(273); // 숫자를 객체로 만드는 방법
console.log(num, numberFromConstructor)

const pi = Math.PI;
console.log(pi);
console.log(pi.toFixed(6));                  // 3.14159, 소수점 이하 6자리까지 보여줌, 반올림
console.log((1000 * pi).toExponential());    // 3.141592653589793e+3
console.log(pi.toPrecision(3));              // 3.14, 유효숫자

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE * Number.MIN_VALUE)
console.log(Math.pow(2, 53) - 1);            // 지수의 부호 1비트, 지수 9비트, 가수의 부호 1비트, 가수 53비트로 총 64비트
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)

// NaN (Not a Number)
let a = parseInt('string');
console.log(Number.isNaN(a));
console.log(Number.isFinite(9007199254740992), Number.isFinite(Infinity));