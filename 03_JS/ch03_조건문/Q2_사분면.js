// 사분면 고르기 - 백준도장 14681
let x = Math.floor(Math.random() * 2001) - 1000
let y = Math.floor(Math.random() * 2001) - 1000
let n = ''

if (x > 0 && y > 0)
    n = '1'
else if (x > 0 && y <0)
    n = '4'
else if (x < 0 && y > 0)
    n = '2'
else if (x < 0 && y <0)
    n = '3'

console.log(`(${x}, ${y})is on the Quadrant${n}`)