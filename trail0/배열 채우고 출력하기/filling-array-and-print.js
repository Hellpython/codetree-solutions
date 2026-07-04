const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

let result = "";

 for (let i = input.length - 1; i >= 0; i--) {
  result += input[i];
}

console.log(result);