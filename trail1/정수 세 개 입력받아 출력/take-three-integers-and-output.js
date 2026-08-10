const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let firstLine = input[0].split(" ");

let a = Number(firstLine[0]);
let b = Number(firstLine[1]);
let c = Number(input[1]);

console.log(a, b, c);
