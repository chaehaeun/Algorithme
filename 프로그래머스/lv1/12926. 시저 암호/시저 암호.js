function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(let i =0; i <s.length; i++){
        let text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        } // 공백 처리
        let textArr = upper.includes(text) ? upper : lower;
        // 대문자화한 어쩌고에 어쩌고가 포함돼있다면? 대문자, 아니면 소문자
        let index = textArr.indexOf(text) + n;
        // 텍스트 인덱스를 구한 뒤에 + n << 인덱스를 n만큼 밀어내는 거
        if(index >= textArr.length) index -= textArr.length;
        // 만약에 인덱스를 더했는데, 총 길이를 넘어가면 arr의 렝쓰만큼 빼야됨
        answer += textArr[index];
    }
    return answer;
}