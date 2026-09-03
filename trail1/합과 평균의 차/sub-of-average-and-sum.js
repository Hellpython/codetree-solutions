const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [a, b, c] = input.split(" ").map(Number);

console.log(`${a + b + c}\n${(a + b + c) / 3}\n${(a + b + c) - ((a + b + c) / 3)}`);