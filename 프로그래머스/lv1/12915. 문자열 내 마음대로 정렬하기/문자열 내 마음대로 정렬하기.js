function solution(strings, n) {
    let newArr = strings;
    newArr.sort();

    newArr.sort((a, b) => {
        if(a[n]!==b[n]){
            return a[n] < b[n] ? -1 : 1;
        }   
    });
  
    return newArr; 
}