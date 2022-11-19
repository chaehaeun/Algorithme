function solution(left, right) {
    // 제곱근 구해서 푸는 거
    let answer = 0;
    
    for (let num = left; num <= right; num++){
        // 범위 돌면서 약수 구해
        // 제곱근이 정수면 약수의 개수는 홀수임!!
        Number.isInteger(Math.sqrt(num)) ? answer -= num : answer += num;
    }
    return answer
}