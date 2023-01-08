const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; i++) {
  let text = input[i];
  let count = 0;
  let searchChar = '0'; // '0' = 배, '1' = 등
  let pos = text.indexOf(searchChar);

  while (pos !== -1) {
    count++;
    pos = text.indexOf(searchChar, pos + 1);
  }
  if (count === 0) { // // 배 0
    console.log('E');
  } else if (count === 1) { // 배 1
    console.log('A');
  } else if (count === 2) { // 배 2
    console.log('B');
  } else if (count === 3) { // 배 3
    console.log('C');
  } else if (count === 4) { // 배 4
    console.log('D');
  }
}