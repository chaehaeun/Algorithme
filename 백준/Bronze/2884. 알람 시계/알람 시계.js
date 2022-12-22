let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let hour = Number(input[0]);  // Hour
let minute = Number(input[1]);  // Minute

minute -= 45;

if (minute < 0) {
    minute += 60;
    hour--;

    if (hour === -1) {
        hour = 23;
    }
}

console.log(hour + ' ' + minute);