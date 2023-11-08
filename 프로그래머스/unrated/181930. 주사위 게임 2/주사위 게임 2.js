function solution(a, b, c) {
    const case1 = a + b + c;
    const case2 = a**2 + b**2 + c**2;
    const case3 = a**3 + b**3 + c**3;
    
    if(a === b && b === c && a === c) return case1 * case2 * case3;
    if(a === b || a === c || b === c) return case1 * case2;
    return case1
}