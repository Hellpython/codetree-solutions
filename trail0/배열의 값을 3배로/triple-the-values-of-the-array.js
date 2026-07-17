const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const arr = input.map(line =>
    line.split(" ").map(Number)
);

for (let i = 0; i < 3; i++) {
    let result = [];

    for (let j = 0; j < 3; j++) {
        result.push(arr[i][j] * 3);
    }

    console.log(result.join(" "));
}