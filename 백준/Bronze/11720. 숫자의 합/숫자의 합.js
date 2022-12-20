const inputArr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = inputArr[1].split('').map(i => +i).reduce((a,b) => a+=b);

console.log(answer);