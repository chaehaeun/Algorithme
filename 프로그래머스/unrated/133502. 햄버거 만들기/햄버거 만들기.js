function solution(ingredient) {
    const hamburger = '1231';
    let count = 0;
    
    for(let i = 0; i < ingredient.length; i++){
        if(ingredient.slice(i, i + 4).join('') === hamburger){
            ingredient.splice(i,4);
            count++  
            console.log(i)
            i-=3
        }
    }
    return count;
}
