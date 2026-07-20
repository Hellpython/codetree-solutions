const fs = require("fs");

const input = fs
    .readFileSync(0)
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

let count = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] % 5 === 0) {
        count++;
    }
}

console.log(count);