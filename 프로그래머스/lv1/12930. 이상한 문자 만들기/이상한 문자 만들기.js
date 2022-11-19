function solution(s) {
  let answer = "";
  let cnt = -1;
  for (let i = 0; i < s.length; i++) {
    s[i] === " " ? (cnt = -1) : cnt++;
    answer += (cnt % 2 === 0 ? s[i].toUpperCase() : s[i]);
    // console.log(s[i], cnt, answer[i]);
  }
  return answer;
}