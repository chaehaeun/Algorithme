function solution(my_string) {
    const arr = my_string.split(' ');
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length !== 0){
            answer.push(arr[i]);
        }
    }
    return answer
}