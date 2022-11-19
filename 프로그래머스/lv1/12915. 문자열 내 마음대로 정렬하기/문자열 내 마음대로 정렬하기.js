function solution(strings, n) {
  
    let newArr = strings.map((str) => str.split(''))
    
    newArr.sort();
    
    newArr.sort((a, b) => {
        if(a[n]!==b[n]){
            return a[n] < b[n] ? -1 : 1;
        }
        
        
    });
    
    let result = newArr.map((str)=> str.join(''));
    
    return result; 
}