function solution(sizes) {
    const wArr = [];
    const hArr = [];
    let wMax = 0;
    let hMax = 0;
    
    for(let card of sizes){
        card.sort((a,b)=> a-b);
        wArr.push(card[0]);
        hArr.push(card[1]);
    }
    
    return Math.max(...wArr) * Math.max(...hArr)
}