// 구구단
for (let i = 0; i <= 9; i++) {
    for (let k = 1; k <= 9; k++) {
        console.log(`${i} x ${k} = ${i * k}`);
    }
    console.log();
}

// 다이아몬드 그리기
let N = 4
for (let i = 0; i <= N; i++) {
    let line = '';
    for (let k = 0; k < N - i; k++)
        line += ' ';        // 앞에 공백(space)를 만들어주는 프로그램 실행
    for (let k = 0; k < 2 * i + 1; k++)
        line += '*';         // 앞의 조건 모두 수행 후, 실행하고 앞의 공백뒤에 나올 별의 갯수를 정하는 조건
    console.log(line);
}
for (let i = N - 1; i >= 0; i--) {
    let line = '';
    for (let k = 0; k < N - i; k++)
        line += ' ';
    for (let k = 0; k < 2 * i + 1; k++)
        line += '*'
    console.log(line)
}