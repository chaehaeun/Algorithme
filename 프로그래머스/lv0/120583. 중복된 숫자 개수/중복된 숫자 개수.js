function solution(array, n) {
    let counter = 0;
    
    array.forEach(num => {
        if(num === n) counter++;
    })
    
    return counter;
}