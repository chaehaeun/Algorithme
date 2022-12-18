const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");


const solution = (arr) => {
    // 1. arr[0] 배열로 split후 각각 숫자로 바꾸고 곱하기
    const multiply = arr[0].split(' ').map(item => +item).reduce((a,b) => a*=b);
    // 3. arr[1] split후 각각 숫자로, 배열 돌면서 - multiply
    const news = arr[1].split(' ').map(item => item - multiply).join(' ');

    return news;
}


console.log(solution(arr));