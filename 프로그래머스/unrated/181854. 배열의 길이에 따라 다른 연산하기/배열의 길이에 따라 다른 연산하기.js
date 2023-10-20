function solution(arr, n) {
    return arr.map((num, idx) => (
    arr.length % 2 !== idx % 2 ? num + n : num
))
}
