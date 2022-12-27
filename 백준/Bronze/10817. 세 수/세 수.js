const inputArr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(num => +num);

const solution = (arr) => {
    arr.sort((a,b)=> a-b);

    return arr[1];
}

console.log(solution(inputArr));