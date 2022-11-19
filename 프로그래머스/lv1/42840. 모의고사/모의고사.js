function solution(answers) {
    const result = [];
    
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    
    let count = [0, 0, 0];

    for(let i = 0; i < answers.length; i++) {
        if(answers[i] == person1[i % person1.length]) count[0]++;
        if(answers[i] == person2[i % person2.length]) count[1]++;
        if(answers[i] == person3[i % person3.length]) count[2]++;
    }
    
    let max = Math.max(...count);
    
    if (count[0] === max) result.push(1);
    if (count[1] === max) result.push(2);
    if (count[2] === max) result.push(3);
    
    return result;
}