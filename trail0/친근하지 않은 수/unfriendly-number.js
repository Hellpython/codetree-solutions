const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const N = Number(input);

let count = 0;

for (let i = 1; i <= N; i++) {
  if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
    count++;
  }
}

console.log(count);