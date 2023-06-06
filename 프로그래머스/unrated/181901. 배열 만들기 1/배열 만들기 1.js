function solution(n, k) {
    const result=[];
    let num = k;
    while(num <= n){
        result.push(num);
        num+=k
    }
    
    return result
}