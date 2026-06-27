const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let A = Number(input[0]);
let B = Number(input[1]);

let result = ' ';

if (A >= 1 && A <= B && B <= 100) {
    for (let i = B; i >= A; i--) {
        result += i + " ";
    }
}

console.log(result.trim());