function solution(N, stages) {
  let result = [];

  let people = stages.length; // 실패한 사람 수 만큼 빼줘야 돼서
  for (let i = 1; i <= N + 1; i++) {
    let tmp = stages.filter((num) => num === i).length; // i층 못 넘어간 사람 수

    result.push([i, tmp / people]); // [ 층 , 못넘어간사람수/남은사람수 ]
    people -= tmp; // 남은 사람 수 갱신
  }

  result.pop(); // 마지막으로 들어간 어레이는 완전히 클리어한 사람이기 때문에 실패율이 없음

  result.sort((a, b) => b[1] - a[1]); // 실패율 내림차순 정렬

  return result.map((item) => item[0]); // 2차원 배열 -> 1차원 배열로
}