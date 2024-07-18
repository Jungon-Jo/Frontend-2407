// 최소값 - array에서 나올 수 없는 큰 값을 준다.
// 최대값 - array에서 나올 수 없는 작은 값을 준다.
// minVal = 100 [3, 78, 24, 67, 91, 5] -> 100과 3 중에 3이 작음으로 minVal = 3 이된다. 3과 78중엔 3이 작음으로 minVal = 3 이된다. 이 과정을 반복한다.
// maxVal = 0   [3, 78, 24, 67, 91, 5] -> 0과 3 중에 3이 큼으로 maxVal = 3 이된다. minVal과 동일한 루프를 반복한다.

let arr = [45, 3, 27, 89, 6, 24];
let minVal = 100, maxVal = 0;
for (let num of arr) {
  if(num < minVal) {
    minVal = num;
  }
  if(num > maxVal) {
    maxVal = num;
  }
  console.log(`과정: ${num}, 최솟값: ${minVal}, 최댓값: ${maxVal}`);
}
console.log(`최솟값: ${minVal}, 최댓값: ${maxVal}`);

function myMin(...arr) {
  let minVal = Number.MAX_SAFE_INTEGER;
  for (let num of arr)
    if (num < minVal)
      minVal = num;
  return minVal;
}
console.log(myMin(arr));

function myMax(...arr) {
  let maxVal = Number.MIN_SAFE_INTEGER;
    for (let num of arr)
      if (num > maxVal)
        maxVal = num;
    return maxVal
}
console.log(myMin(45, 67, 3, 25, 88, 19), myMax(5, 67, 3, 25, 88, 19))