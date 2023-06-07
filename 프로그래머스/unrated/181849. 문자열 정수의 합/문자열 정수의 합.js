function solution(num_str) {
    return num_str.split('').map(num => +num).reduce((a,b) => a+=b);
}