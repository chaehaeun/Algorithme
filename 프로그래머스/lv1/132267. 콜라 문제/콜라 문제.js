function solution(a, b, n) {
    let currentBottle = n;
    let gaveBottle = 0;
    while(currentBottle >= a){
        let getBottle = Math.floor(currentBottle/a) * b
        gaveBottle += getBottle;
        currentBottle = getBottle + currentBottle%a;
    }
    return gaveBottle;
}