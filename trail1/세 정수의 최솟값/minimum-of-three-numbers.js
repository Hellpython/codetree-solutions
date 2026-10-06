const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [a, b, c] = input.split(" ").map(Number);

let min = Math.min(a, b, c);

console.log(min);