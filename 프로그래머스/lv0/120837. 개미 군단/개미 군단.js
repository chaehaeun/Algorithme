function solution(hp) {
    let count = 0;
    const ant = [5, 3, 1];
    let i = 0;
    while(i < ant.length){
        if(hp === 0) break;
        count = count + Math.floor(hp/ant[i]);
        hp = hp % ant[i];
        i++;
    }
    
    return count;
}