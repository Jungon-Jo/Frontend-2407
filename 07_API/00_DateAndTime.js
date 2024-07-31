function twoDigit(num) {
    return num < 10 ? '0' + num : String(num);
  }

function today1(now) {
    const week = '일월화수목금토'.split('')
    const weekDay = week[now.getDay() % 7]
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())}(${weekDay})`;
  }

function today2(now) {
    return `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`;
  }