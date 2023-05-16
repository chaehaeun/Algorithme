function solution(num_list, n) {
    return num_list.filter(num => num === n).length ? 1 : 0;
}