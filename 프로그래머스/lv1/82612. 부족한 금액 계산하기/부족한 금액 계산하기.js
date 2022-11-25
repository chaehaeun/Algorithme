function solution(price, money, count) {
    let currentPrice = 0;
    for(let i = 1; i <= count; i++ ){
        currentPrice+= price*i;
    }
    return currentPrice >= money ? currentPrice - money : 0;
}