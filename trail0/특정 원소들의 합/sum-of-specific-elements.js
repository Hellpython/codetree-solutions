const fs = require("fs");

const arr = fs
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n")
    .map(line => line.trim().split(/\s+/).map(Number));

let sum = 0;

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (j <= i) {
            sum += arr[i][j];
        }
    }
}

console.log(sum);