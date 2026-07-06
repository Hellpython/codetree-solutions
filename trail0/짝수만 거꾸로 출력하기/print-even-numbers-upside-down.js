const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const N = input[0];
const arr = input.slice(1);

let result = [];

for (let i = N - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        result.push(arr[i]);
    }
}

console.log(result.join(" "));