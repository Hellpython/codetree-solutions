const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let aMath = input[0];
let aEng = input[1];
let bMath = input[2];
let bEng = input[3];

if (aMath > bMath && aEng > bEng) {
    console.log(1);
} else {
    console.log(0);
}