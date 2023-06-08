function solution(my_string, k) {
    let answer = ''
    
    for(let i = 1; i <= k; i++){
        answer += my_string;
    } 
    return answer;
}