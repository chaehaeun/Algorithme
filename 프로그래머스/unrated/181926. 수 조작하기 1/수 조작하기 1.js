function solution(n, control) {
    const arr = control.split('');
    let i = 0;
    while(i < arr.length){
        if(arr[i] === 'w') n+=1;
        else if(arr[i] === 's') n-=1;
        else if(arr[i] === 'd') n+=10;
        else if(arr[i] === 'a') n-=10;
        i++
    }
    
    return n;
}