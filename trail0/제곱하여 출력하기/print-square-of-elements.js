const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const n = input[0];
const arr = input.slice(1);

let result = "";

for (let i = 0; i < n; i++) {
  result += arr[i] * arr[i] + " ";
}

console.log(result.trim());