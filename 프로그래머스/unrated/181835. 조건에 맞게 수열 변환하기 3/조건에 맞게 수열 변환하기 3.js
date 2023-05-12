function solution(arr, k) {
   return k % 2 === 0 ? arr.map(num => num + k) : arr.map(num => num * k);
}