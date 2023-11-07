function solution(number) {
    const sum = number.split('')
    .map(num => +num).reduce((a,b) => a + b);
    
    return sum % 9;
}