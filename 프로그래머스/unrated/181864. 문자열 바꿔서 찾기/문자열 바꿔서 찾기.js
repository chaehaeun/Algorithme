function solution(myString, pat) {
    return Number(myString.split('').map(el => el === 'A' ? 'B' : 'A').join('').includes(pat));
}