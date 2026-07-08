const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const A = input[0];
const B = input[1];

let sum = 0;

for (let i = A; i <= B; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(sum);