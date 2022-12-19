const inputArr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (arr) => {
    let minutes = 0
    for(let i = 0; i < arr.length; i++){
        minutes += +arr[i];
    }
    
    console.log(`${parseInt(minutes/60)}\n${minutes%60}` );
}


solution(inputArr);