function solution(ingredient) {
    let count = 0;
    const arr = [];
    
    for(let i = 0; i < ingredient.length; i++){
        const len = arr.push(ingredient[i]);
        // push()는 배열 끝에 요소를 추가하고 배열의 길이를 반환함
        if(len >= 4){
            if(
                arr[len - 4] === 1 &&
                arr[len - 3] === 2 &&
                arr[len - 2] === 3 &&
                arr[len - 1] === 1
            ){
                arr.pop();
                arr.pop();
                arr.pop();
                arr.pop();         
                
                count++;
            }
        }
    }
    return count;
}