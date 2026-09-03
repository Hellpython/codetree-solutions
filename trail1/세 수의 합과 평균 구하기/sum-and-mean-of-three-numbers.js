const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [A, B, C] = input.split(" ").map(Number);

console.log(`${A + B + C}\n${parseInt((A + B + C) / 3)}`);