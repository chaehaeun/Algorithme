function solution(n) {
    const toArr = n.toString(3).split('')
    const reverseNum = toArr.reverse().join('');
    return parseInt(reverseNum, 3);
}