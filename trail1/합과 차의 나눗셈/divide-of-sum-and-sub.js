const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [a, b] = input.split(" ").map(Number);

let c = (a + b) / (a - b);

console.log(`${c.toFixed(2)}`);