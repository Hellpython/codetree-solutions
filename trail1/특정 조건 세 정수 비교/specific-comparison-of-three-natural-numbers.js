const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [a, b, c] = input.split(" ").map(Number);

let min = Math.min(a, b, c);

let first;
let second;

if (a === min) {
    first = 1;
} else {
    first = 0;
}


if (a === b && b === c) {
    second = 1;
} else {
    second = 0;
}

console.log(`${first} ${second}`);