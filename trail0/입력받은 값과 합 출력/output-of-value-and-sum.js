const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(' ');

let A = Number(input[0].split(' '));
let B = Number(input[1]);

if (A >= 1 && B <= 100) {
    console.log(A, B, A + B);
}