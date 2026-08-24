const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [A, B] = input.split(" ").map(Number);

console.log(`${parseInt(A / B)}...${A % B}`)

