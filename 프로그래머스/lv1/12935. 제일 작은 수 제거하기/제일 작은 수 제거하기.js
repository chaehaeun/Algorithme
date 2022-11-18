function solution(arr) {
   if (arr.length === 1) return [-1];
    
    let minNum = Math.min(...arr);
    
    return arr.filter((num) => num !== minNum);
    
    
}
