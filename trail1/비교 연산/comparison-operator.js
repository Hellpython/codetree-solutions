const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [a, b] = input.split(" ").map(Number);

let isSameOrBiggerA = Number(a >= b);
let isBiggerA = Number(a > b);
let isSameOrBiggerB = Number(b >= a);
let isBiggerB = Number (b > a);
let isSame = Number(a === b);
let isDiffer = Number(a !== b);

console.log(`${isSameOrBiggerA}\n${isBiggerA}\n${isSameOrBiggerB}\n${isBiggerB}\n${isSame}\n${isDiffer}`);