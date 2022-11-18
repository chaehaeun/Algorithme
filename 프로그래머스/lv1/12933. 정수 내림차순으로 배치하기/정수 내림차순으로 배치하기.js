function solution(n) {
    let tmp = n.toString().split('').sort((a,b)=> b-a);
    
    return parseInt(tmp.join(''));
}