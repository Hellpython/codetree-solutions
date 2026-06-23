const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

if (a >= 0 && a <= 1000 &&
    b >= 0 && b <= 1000 && 
    c >= 0 && c <= 1000) {
    console.log(a.toFixed(3));
    console.log(b.toFixed(3));
    console.log(c.toFixed(3));
}