function solution(myString, pat) {
    const lower1 = myString.toLowerCase();
    const lower2 = pat.toLowerCase();
    
    return lower1.includes(lower2) ? 1 : 0; 
}