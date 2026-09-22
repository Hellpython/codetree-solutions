const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [a, b] = input.split(" ").map(Number);

let temp;
let temp2;

if (a < b) {
    temp = 1;
} else {
    temp = 0;
}

if (a === b) {
    temp2 = 1;
} else {
    temp2 = 0;
}

console.log(`${temp} ${temp2}`);