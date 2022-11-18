function solution(participant, completion) {
    // 두 배열을 정렬하고 비교해서 다른 이름을 만나면 리턴
    participant.sort();
    completion.sort();
    
    for(let i = 0; i < participant.length; i++){
        if (participant[i] !== completion[i]) return participant[i]
    }
    
}