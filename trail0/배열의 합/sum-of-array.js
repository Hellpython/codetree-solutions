const fs = require("fs");

const input = fs
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n")
    .map(line => line.split(" ").map(Number));

for (let i = 0; i < 4; i++) {
    let sum = 0;

    for (let j = 0; j < 4; j++) {
        sum += input[i][j];
    }

    console.log(sum);
}