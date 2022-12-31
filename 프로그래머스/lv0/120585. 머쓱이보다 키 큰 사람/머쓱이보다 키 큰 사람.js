function solution(array, height) {
    let count = 0;
    array.forEach(h => {
        if(height < h) count++;
    })
    
    return count
}