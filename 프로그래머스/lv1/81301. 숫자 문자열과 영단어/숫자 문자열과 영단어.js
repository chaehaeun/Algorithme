function solution(s) {
    let numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let answer = s;
    
    for(let i = 0 ; i < numArr.length; i++){
        let arr = answer.split(numArr[i]);
        answer = arr.join(i);
    }
   
    return parseInt(answer);
}