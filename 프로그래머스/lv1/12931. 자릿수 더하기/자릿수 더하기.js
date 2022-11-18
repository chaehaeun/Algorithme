function solution(n){
    let num = n.toString().split('');
    let sum = 0;
    for(let i = 0; i <  num.length; i++){
        sum += Number(num[i]);
    }
    
    return sum;
}