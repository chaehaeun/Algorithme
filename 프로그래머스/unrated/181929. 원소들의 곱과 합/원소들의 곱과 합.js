function solution(num_list) {
    const multiply = num_list.reduce((a,b) => a*=b);
    const add = num_list.reduce((a,b) => a+=b);
    
    return multiply < add**2 ? 1 : 0; 
}