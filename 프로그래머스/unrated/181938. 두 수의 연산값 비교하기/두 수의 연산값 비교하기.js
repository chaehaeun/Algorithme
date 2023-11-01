function solution(a, b) {
    const calc1 = Number(String(a) + String(b));
    const calc2 = 2 * a * b
    
    return calc1 >= calc2 ? calc1 : calc2;
}