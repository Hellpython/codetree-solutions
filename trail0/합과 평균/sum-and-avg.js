const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(' ');

let A = Number(input[0]);
let B = Number(input[1]);

let average = (A + B) / 2;

if (A >= 1 && B <= 100) {
    console.log(A + B, average.toFixed(1));
}