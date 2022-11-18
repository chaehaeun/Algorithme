function solution(n) {
    let arr = n.toString().split('');
    return arr.reverse().map((toNum)=> parseInt(toNum));
}