function solution(my_string) {
    const strSet = new Set(my_string);
    return [...strSet].join('');
}