const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let A = input[0];
let B = input[1];

let result = [];

while (A <= B) {
    result.push(A);

    if (A % 2 === 1) {
        A *= 2;
    } else {
        A += 3;
    }
}

console.log(result.join(" "));