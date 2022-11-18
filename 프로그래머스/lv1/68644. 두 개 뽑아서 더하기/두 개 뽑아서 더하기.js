function solution(numbers) {
  // Set 만들어서 그 안에 다 넣으면 될 듯?
    const set = new Set();
    
    for (let i = 0 ; i < numbers.length; i++ ){
        for(let j = i + 1 ; j < numbers.length; j++){
            const sum = numbers[i] + numbers[j];
            set.add(sum);
        }
    }
    
    return [...set].sort((a,b) => a-b);
}