function solution(numbers, hand) {
  function findKey(key) {
    let numpad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ["*", 0, "#"],
    ];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (numpad[i][j] === key) {
          return [i, j];
        }
      }
    }
  }

  let result = "";
  let left = "*";
  let right = "#";
  for (let num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      result += "L";
      left = num;
    } else if (num === 3 || num === 6 || num === 9) {
      result += "R";
      right = num - 2;
    } else {
      let rightKey = findKey(right); // 현재 오른손이 위치하고 있는 좌표를 가진 배열을 할당하게 됨
      let leftKey = findKey(left);
      let center = findKey(num); // 입력 받은 키의 위치 좌표 배열
      let rightMove =
        Math.abs(rightKey[0] - center[0]) + Math.abs(rightKey[1] - center[1]); // 움직여야 되는 칸 수
      let leftMove =
        Math.abs(leftKey[0] - center[0]) + Math.abs(leftKey[1] - center[1]);
      if (rightMove === leftMove) {
        hand === "right"
          ? ((right = num), (result += "R"))
          : ((left = num), (result += "L"));
      } else if (rightMove > leftMove) {
        result += "L";
        left = num;
      } else {
        result += "R";
        right = num;
      }
    }
  }

  return result;
}