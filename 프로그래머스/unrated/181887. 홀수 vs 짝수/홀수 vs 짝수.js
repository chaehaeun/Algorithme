function solution(num_list) {
    let sumOdd = 0;
    let sumEven = 0;
    
    for(let i = 0; i < num_list.length; i++){
        i % 2 === 0 ? sumEven+=num_list[i] : sumOdd+=num_list[i] 
    }
    
    if(sumOdd === sumEven) return sumOdd;
    return sumOdd > sumEven ? sumOdd : sumEven;
}