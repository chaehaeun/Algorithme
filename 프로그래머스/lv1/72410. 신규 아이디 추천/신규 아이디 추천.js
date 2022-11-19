function solution(new_id) {
    let answer = new_id;
    
    answer = answer.toLowerCase().replace(/[^\w-_.]/g, "").replace(/\.+/g, '.'); // ~3
    answer = answer.replace(/^\.|\.$/g, "").padEnd(1,'a').slice(0,15).replace(/\.$/g, ''); // 4~6
    answer = answer.padEnd(3, answer[answer.length - 1]); // 7
    
    return answer;
    
}