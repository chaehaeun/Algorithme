function solution(my_string) {
    const arr = my_string.split('').map(el => +el);
    return arr.filter(el =>  Number.isNaN(el) !== true).sort((a,b) => a-b);
}