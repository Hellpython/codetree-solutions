const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [firstLine, secondLine] = input.split("\n")

let a = Number(firstLine)
let [b, c, d, e] = secondLine.split(" ").map(Number);

let isBiggerAToB = Number(a > b);
let isBiggerAToC = Number(a > c);
let isBiggerAToD = Number(a > d);
let isBiggerAToE = Number(a > e);

console.log(`${isBiggerAToB}
${isBiggerAToC}
${isBiggerAToD}
${isBiggerAToE}`);