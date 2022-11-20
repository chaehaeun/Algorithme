function solution(array, commands) {
    let answer = [];
    for(let i = 0; i < commands.length; i++){
        const commendArr = commands[i];
        const numArr = array.slice(commendArr[0] - 1, commendArr[1]);
        numArr.sort((a,b)=> a-b);
        let idx = commendArr[2];
        answer.push(numArr[idx - 1])
    }
    
    return answer;
}