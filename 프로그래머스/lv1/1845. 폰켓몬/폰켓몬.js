function solution(nums) {
    
    let pokemon = new Set();
    const len = nums.length
    for (let i = 0 ; i < len; i++){
        pokemon.add(nums[i]);
    }
    return pokemon.size > len/2 ? len/2 : pokemon.size ;
    // 포켓몬 종류가 
}