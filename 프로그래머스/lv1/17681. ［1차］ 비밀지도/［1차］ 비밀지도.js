const toBin = (arr, n) => {
    return arr.map((item) => item.toString(2).padStart(n, '0'));
    
}

function solution(n, arr1, arr2) {
    let answerArr = [];
    let treasureMap = '';
    
    const binArr1 = toBin(arr1, n);
    const binArr2 = toBin(arr2, n);
    
    for(let i = 0; i < n ; i++){
        for(let j = 0; j < n; j++){
            let isSame = binArr1[i][j] === binArr2[i][j];
            if(isSame && binArr1[i][j] === '0'){
                treasureMap += ' ';
            }else if(binArr1[i][j] === '1' || binArr2[i][j] === '1'){
                treasureMap += '#'
            }
            
        }
        answerArr.push(treasureMap);
        treasureMap = '';
    }
    
    return answerArr;
}

// 1이 #임
// 0이 ' '임
