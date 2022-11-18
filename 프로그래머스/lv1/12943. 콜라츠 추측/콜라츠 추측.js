function solution(num) {
  let count = 0;
  while (num !== 1) {
    if (count >= 500) return -1;
    else if (num % 2 === 0) {
      num = num / 2;
      count++;
    } else if (num % 2 === 1) {
      num = num * 3 + 1;
      count++;
    }
  }

  return count;
}