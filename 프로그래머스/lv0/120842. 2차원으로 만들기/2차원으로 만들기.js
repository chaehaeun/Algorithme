function solution(num_list, n) {
    const res = [];
    
    while(num_list.length){
        res.push(num_list.splice(0,n));
    }
    return res;
}