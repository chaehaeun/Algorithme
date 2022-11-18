function solution(participant, completion) {
    // 배열을 합쳐버리고, 같은 이름의 갯수가 홀수인 녀석을 뽑아서 리턴하기
    let fullList = participant.concat(completion);
    let tmpArr = []
    
    for(let i = 0; i < fullList.length; i++){
        
        tmpArr = fullList.filter(item => fullList[i] === item);
        
        if (tmpArr.length % 2 !== 0) return fullList[i];
        
    }
    
}