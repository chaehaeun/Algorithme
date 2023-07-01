function solution(n) {
    return n.toString().split('').map(num => +num).reduce((a,b) => a+=b);
}