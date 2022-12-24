const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (arr) => {
    arr = arr[0].split(' ').map(num => +num);

    const answer = [Math.min(...arr), Math.max(...arr)];

    console.log(...answer)
}

solution(arr);