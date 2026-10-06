const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let thirdteen = input % 13 == 0;
let nineteen = input % 19 == 0;

if (thirdteen || nineteen) {
    console.log("True");
} else {
    console.log("False");
}