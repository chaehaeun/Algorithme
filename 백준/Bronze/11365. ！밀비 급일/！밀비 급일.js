const inputArr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (arr) => {
    for(let i = 0; i < arr.length-1; i++){
        arr[i] = arr[i].split('').reverse().join('');
        console.log(arr[i]);
    }
}

solution(inputArr);