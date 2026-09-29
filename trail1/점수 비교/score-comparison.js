const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [firstLine, endLine] = input.split("\n");

let [a, b] = firstLine.split(" ").map(Number);
let [c, d] = endLine.split(" ").map(Number);

if (a > c && b > d) {
    console.log(1);
} else {
    console.log(0);
}

