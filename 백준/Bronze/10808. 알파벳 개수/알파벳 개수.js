const input = require("fs").readFileSync("/dev/stdin").toString().split("");


const alphabet = "abcdefghijklmnopqrstuvwxyz";
const counts = new Array(26).fill(0);

input.forEach(i => counts[alphabet.indexOf(i)]++);

console.log(counts.join(" "));