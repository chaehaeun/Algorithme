const inputArr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");


const solution = (arr) => {
    const numArr = arr.map(num => +num);
    const maxNum = Math.max(...numArr);

    const maxIdx = numArr.indexOf(maxNum) + 1;
    console.log(maxNum+ '\n' + maxIdx)
}
solution(inputArr);