const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const solution = (arr1, arr2) => {
    const num1 = parseInt(arr1);
    const numArr = arr2.split('').map(item => parseInt(item)).reverse();

    let result = []
    for(let i = 0; i < numArr.length; i++){
        result.push(num1*numArr[i]);
    }

    result = [...result, arr1*arr2];
    return result.join('\n')
} 


console.log(solution(arr[0],arr[1]));