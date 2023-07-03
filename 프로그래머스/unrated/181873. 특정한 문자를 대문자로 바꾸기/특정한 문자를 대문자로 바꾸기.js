function solution(my_string, alp) {
    return my_string.split('').map(a => a === alp ? a.toUpperCase() : a).join("")
}