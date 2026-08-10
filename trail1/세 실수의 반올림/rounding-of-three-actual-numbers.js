const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let fixedA = a.toFixed(3);
let fixedB = b.toFixed(3);
let fixedC = c.toFixed(3);

console.log(`${fixedA}\n${fixedB}\n${fixedC}`);