const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [a, b] = input.split(" ").map(Number);

let isSameOrBiggerA = Number(a >= b);
let isBiggerA = Number(a > b);
let isSameOrBiggerB = Number(b >= a);
let isBiggerB = Number(b > a);

console.log(`${isSameOrBiggerA}
${isBiggerA}
${isSameOrBiggerB}
${isBiggerB}`);