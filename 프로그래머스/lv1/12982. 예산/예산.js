function solution(d, budget) {
    let count = 0;
    d.sort((a,b)=> a-b);
    
    for(let i = 0; i < d.length ; i++ ){
        if(budget < d[i]) continue;
        budget -= d[i];
        count ++;
    }
    return count;
}