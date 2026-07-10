const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const N = input[0];
const M = input[1];

for (let i = 0; i < N; i++) {
  let line = '';

  for (let j = 0; j < M; j++) {
    line += '* ';
  }

  console.log(line.trim());
}