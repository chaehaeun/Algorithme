function solution(X, Y) {
    const xArr = X.split('');
    const yArr = Y.split('');
    let answer = []
    // 배열 두번 돌아야 될 듯?
    for(let i = 0; i < 10; i++){
        const x = xArr.filter(num => +num === i).length;
        const y = yArr.filter(num => +num === i).length;
        // 더 적은 개수만큼 i를 answer 어레이에 넣기
        for(let j = 0; j < Math.min(x,y); j++){
            answer.push(i);
        }
    }
    
    if(answer.length === 0) return '-1';
    answer = answer.sort((a,b)=> b-a).join('')
    if(parseInt(answer)=== 0) return '0';
    
    return answer;
}