function solution(s) {

    let arr = [];
    arr = s.split(' ');
    arr = arr.map((i) => i.charAt(0).toUpperCase() + i.slice(1).toLowerCase()).join(' ');
    
    return arr;
}
