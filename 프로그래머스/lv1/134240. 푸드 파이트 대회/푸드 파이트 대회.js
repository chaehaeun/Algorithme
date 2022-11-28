function solution(food) {
    food.shift();
    let arr = [];
    
    for(let i = 0; i < food.length; i++){
        if(food[i] > 1){
            for(let j = 0; j < Math.floor(food[i]/2); j++){
                arr.push(i+1);
            }
        }
    }
    
    let answer = [...arr, 0];
    answer.push(...arr.reverse());
    
    return answer.join('')
    
}

// 주어진 배열을 가지고 한쪽 음식 배열만 만들고
    // 
// 그 배열을 리버스한 배열도 하나 만들고
// 싹 다 합쳐벌이기