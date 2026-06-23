const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0]);
let b = input[1];

if (a >= 1 && a <= 100 &&
    b >= 1 && b <= 100) {
        console.log(b, a);
    }