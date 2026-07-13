const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const N = input[0];

let index = 1;
let result = [];

for (let t = 0; t < N; t++) {
  let a = input[index];
  let b = input[index + 1];

  index += 2;

  let sum = 0;

  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  result.push(sum);
}

console.log(result.join("\n"));