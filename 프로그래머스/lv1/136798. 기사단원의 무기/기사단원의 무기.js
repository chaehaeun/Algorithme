function solution(number, limit, power) {
    
    let result = 0;
    let arr = [];
    for (let i = 1; i <= number ; i++){
        arr.push(i);
    }
    
    for(let j = 0 ; j < arr.length; j++){
        let count = 0;
        for(let k = 1; k*k <= arr[j] ; k++){
            if(arr[j] % k === 0){
                count++;
                if(k*k < arr[j]){
                    count++;                
                } 
            }
        }
        if(count > limit){
            result+= power;
        }else{
            result+= count;
        }
        
    }
    
    return result;
}