// 백준도장 - 2884 문제

const alarmHour = 6, alarmMin = 40
let newHour = 0, newMin = 0
if (newMin < 45) {
  if (alarmHour == 0) {
    newHour = 24 + alarmHour - 1
    newMin = 60 + alarmMin - 45
  } else {
    newHour = alarmHour - 1
    newMin = 60 + alarmMin - 45
  }
} else {
    newHour = alarmHour
    newMin = alarmMin - 45
}
console.log(`상근이가 일어나야 할 시간은 ${newHour}시 ${newMin}분이다.`)