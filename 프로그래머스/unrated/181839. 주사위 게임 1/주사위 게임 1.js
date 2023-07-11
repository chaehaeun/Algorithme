function solution(a, b) {
    const calcA = a % 2;
    const calcB = b % 2;
    
    if (calcA && calcB) return a**2 + b**2;
    if (calcA || calcB) return 2 * (a + b);
    if (!calcA && !calcB) return Math.abs(a-b);
}