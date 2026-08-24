const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [a, b] = input.split("\n").map(Number);

console.log(`${a + 87}\n${b % 10}`);