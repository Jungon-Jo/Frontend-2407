// 생년월일에 따른 나이 계산

const bYear = 1991, bMonth = 12, bDay = 5;
const today = new Date();
let tYear = today.getFullYear();
let tMonth = today.getMonth() + 1;
let tDay = today.getDate();

let age = 0
//현재 월이 생월보다 작은 경우
//현재 월이 생월보다 큰 경우
//현재 월이 생월과 같은 경우
if (tMonth < bMonth)
    age = tYear - bYear - 1;
else if (tMonth > bMonth)
    age = tYear - bYear;
else {
    if (tDay >= bDay)
        age = tYear - bYear
    else
        age = tYear - bYear -1;
}

console.log(`생일: ${bYear}-${bMonth}-${bDay}, 나이: ${age}`)