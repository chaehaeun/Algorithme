function solution(x) {
    const arr = x.toString().split('');
    
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        let num = parseInt(arr[i]);
        sum += num;
    }
    
    return x % sum === 0 ? true : false;
}
