function solution(num, k) {
    const idx = String(num).indexOf(String(k))
    return idx > -1 ? idx + 1 : idx;
}