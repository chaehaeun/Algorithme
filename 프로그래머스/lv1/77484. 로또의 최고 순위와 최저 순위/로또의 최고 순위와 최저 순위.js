function solution(lottos, win_nums) {
    let result = [];
    let rankArr = [6, 6, 5, 4, 3, 2, 1]
    let min = 0;
    let countZero = 0;

    for (let i = 0; i < lottos.length; i++){
        if(lottos[i] === 0) countZero++;
        
        for (let j = 0; j < win_nums.length ; j++){
            if(lottos[i] === win_nums[j]){
                min++;
                }
            }       
        }
    
    let max = min + countZero;
    
    result = [rankArr[max] , rankArr[min]]
    return result;
}