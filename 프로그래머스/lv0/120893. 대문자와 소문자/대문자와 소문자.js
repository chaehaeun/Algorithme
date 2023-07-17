function solution(my_string) {
    let answer = '';
    for(let i = 0; i < my_string.length; i++){
        if(my_string[i].charCodeAt() < 91) answer+=my_string[i].toLowerCase()
        if(my_string[i].charCodeAt() > 96) answer+=my_string[i].toUpperCase()
    }
    return answer;
}