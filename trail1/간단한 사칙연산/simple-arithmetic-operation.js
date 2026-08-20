const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let sum = a + b;
let mus = a - b;
let int = parseInt(a / b);
let num = a % b;

console.log(`${sum}\n${mus}\n${int}\n${num}`);