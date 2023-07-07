function solution(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return arr1.length > arr2.length ? 1 : -1;
    }else if(arr1.length === arr2.length){
        const sum1 = arr1.reduce((a,b) => a+b);
        const sum2 = arr2.reduce((a,b) => a+b);
        if (sum1 === sum2) return 0;
        return sum1 > sum2 ? 1 : -1;
    }
}