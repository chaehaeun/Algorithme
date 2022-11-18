function solution(s) {
    let arr = s.split(' '); // 문자열 쪼개서 배열로 만들었고
    let result = ''
    
    console.log(arr)
    
    for (let i = 0 ; i < arr.length; i++){
        for (let j = 0 ; j < arr[i].length; j++){  
          j % 2=== 0 ? result += arr[i][j].toUpperCase() :  result += arr[i][j].toLowerCase();
        }
        
        // 단어 하나가 다 처리 되고 나면, 공백을 하나 넣어줘야 됨
        if(i !== arr.length - 1){
            result += ' '
        }

    }
    
    return result
}
