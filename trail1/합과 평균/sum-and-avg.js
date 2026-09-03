const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [A, B] = input.split(" ").map(Number);

console.log(`${A + B} ${((A + B) / 2).toFixed(1)}`);