function solution(box, n) {
    let arr = []
    for(let i = 0; i < box.length; i++){
        arr.push(Math.floor(box[i] / n));
    }
    return arr.reduce((a,b) => a*=b);
}