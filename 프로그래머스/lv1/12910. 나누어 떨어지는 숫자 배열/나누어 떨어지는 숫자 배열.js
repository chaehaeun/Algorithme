function solution(arr, divisor) {
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      myArr.push(arr[i]);
    }
  }

  return myArr.length === 0 ? (myArr = [-1]) : myArr.sort((a, b) => a - b);
}
