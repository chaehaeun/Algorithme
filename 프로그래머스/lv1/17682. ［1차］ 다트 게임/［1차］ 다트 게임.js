function solution(dartResult) {
    
    let score = 0;
    let temp = 10;
    let arr = [];
    for(let i = 0; i < dartResult.length ; i++){
        if(dartResult[i] <= 9 && dartResult[i] >= 0 ){ // 숫자인지
            score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
        }else if(dartResult[i] === 'S'){
            arr.push(score);
        }else if(dartResult[i] === 'D'){
            arr.push(Math.pow(score, 2));   
        }else if(dartResult[i] === 'T'){
            arr.push(Math.pow(score, 3));
        }else if(dartResult[i] === '*'){
            // 해당점수, 이전 점수 * 2
            arr[arr.length - 2] *=2;
            arr[arr.length - 1] *=2;
        }else if(dartResult[i] === '#'){
            arr[arr.length-1] = -1*arr[arr.length-1];
        }
        
    }
    
    return arr.reduce((a,b) => a+=b,0);
}