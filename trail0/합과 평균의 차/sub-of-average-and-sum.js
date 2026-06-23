const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let sum = a + b + c;
let average = (a + b + c) / 3;

if (a >= 1 && a <= 100 && 
    b >= 1 && b <= 100 &&
    c >= 1 && c <= 100) {
        console.log(sum);
        console.log(average);
        console.log(sum - average);
    }
