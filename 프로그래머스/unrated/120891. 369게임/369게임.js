function solution(order) {
  return [...String(order)].filter((v) => ["3", "6", "9"].includes(v)).length;
}