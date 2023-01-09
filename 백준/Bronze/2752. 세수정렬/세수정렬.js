const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = (arr) => {
    const answer = arr.sort((a,b) => a-b).map(num => +num);

    console.log(...arr)
}


solution(arr);