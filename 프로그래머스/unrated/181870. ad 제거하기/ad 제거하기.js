function solution(strArr) {
    let result = [];
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i].includes('ad')) continue;
        result.push(strArr[i]);
    }
    
    return result;
}