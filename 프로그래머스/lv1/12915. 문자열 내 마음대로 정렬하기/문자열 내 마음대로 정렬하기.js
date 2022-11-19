function solution(strings, n) {
    strings.sort();
    strings.sort((a, b) => {
        if(a[n]!==b[n]){
            return a[n] < b[n] ? -1 : 1;
        }   
    });
  
    return strings; 
}