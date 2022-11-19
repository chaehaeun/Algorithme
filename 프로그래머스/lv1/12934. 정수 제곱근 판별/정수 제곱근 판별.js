function solution(n) {
    const num =  Math.sqrt(n);
    return num % 1 ? -1 :Math.pow(num+1, 2) ;
}
