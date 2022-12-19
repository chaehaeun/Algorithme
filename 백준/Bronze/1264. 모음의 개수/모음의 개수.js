const inputArr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");



const solution = (arr) => {
    
    for(let i = 0 ; i < arr.length-1; i++){
        const stringArr = arr[i].split('');
        let count = 0;
        for(let j = 0 ; j < stringArr.length; j++){
            const lower = arr[i][j].toLowerCase();
            if(lower == 'a'||lower == 'e'||lower == 'i'||lower == 'o'||lower == 'u'){
                count++;
            }
            
        }
        console.log(count);
    }
}


solution(inputArr);
