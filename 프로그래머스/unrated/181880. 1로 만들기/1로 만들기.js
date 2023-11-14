function solution(num_list) {
    let count = 0;
    
    for(let i = 0; i < num_list.length; i++){
        let num = num_list[i];
        
        while (num !== 1){
            num % 2 === 0 ? num = num/2 : num = (num - 1) / 2;
            
            count++;
        }
    }
    
    return count;
    
}