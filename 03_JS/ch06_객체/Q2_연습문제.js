// 1. 1에서 1000사이에 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되었는가?
let num = '';
for (let i = 1; i <= 1000; i++)
  num += i;

let count1 = 0, count2 = 0
for (let i = 0; i < num.length; i++) {
  if (num[i] == '1')
    count1++;
  if (num[i] == '2')
    count2++;
}
console.log(count1, count2);

let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // new Array(10).fill(0)
for (let digit of num) {
  let numStr = parseInt(digit)
  countArr[numStr]++;
}
console.log(countArr); // 192, 301, 300, ..., 300


// 2. C:/Workspace/01_FrontEnd/03_JS/ch6_객체/Q2_연습문제.js
//    위 문자열에서 파일명 Q2_연습문제.js 만 분리하세요.
let path = 'C:/Workspace/01_FrontEnd/03_JS/ch6_객체/Q2_연습문제.js'
let index = path.lastIndexOf('/') + 1;
console.log(path.substring(index));

// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일때
//    가장 큰 palindrome  수와 어떤 수를 곱해서 나온 결과인가?
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

let maxPal = 0, max1 = 0, max2 = 0;
for (let i = 100; i <= 999; i++) {
  for (let k = 100; k <= 999; k++) {
    let mul = i * k;
    if (isPalindrome(String(mul))) {
      if (mul > maxPal) {
        maxPal = mul; max1 = i; max2 = k;
        // console.log(`${max1} x ${max2} = ${maxPal}`)
      }
    }
  }
}
console.log(`${max1} x ${max2} = ${maxPal}`)

// 4. 다음 문장에서 the 단어는 몇번 사용되었는가?(가장 많이 사용될 객체)
let sample = "the grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to the.";
let cleanStr = sample.replace(/[-',.]/g, '').toLowerCase();
console.log(cleanStr)
// 배열을 arr로 만든 후, 배열의 원소가 the 면 카운트 값을 증가시킴(반복문을 만드는 이유는 )
let strArr = cleanStr.split(' ');
let count = 0;
for (let word of strArr) {
  if (word === 'the')
    count++;
}
console.log(count);
console.log(strArr);
