const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [A, B] = input.split(" ").map(Number);

if (A > B) {
    console.log(`${A - B}`);
} else if (B > A) {
    console.log(`${B - A}`);
} else {
    console.log(A - B);
}