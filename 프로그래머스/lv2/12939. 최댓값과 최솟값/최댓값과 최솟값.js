function solution(s) {
    let arr = s.split(' ').map((num) => parseInt(num));
    return `${Math.min(...arr)} ${Math.max(...arr)}`
}