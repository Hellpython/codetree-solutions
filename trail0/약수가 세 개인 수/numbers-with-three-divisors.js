const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const start = input[0];
const end = input[1];

let answer = 0;

for (let num = start; num <= end; num++) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  if (count === 3) {
    answer++;
  }
}

console.log(answer);