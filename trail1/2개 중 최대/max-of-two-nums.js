const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [A, B] = input.split(" ").map(Number);

if (A > B) {
    console.log(A);
} else {
    console.log(B);
}