const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let three = input % 3 == 0;
let five = input % 5 == 0;

if (three || five) {
    console.log(1);
} else {
    console.log(0);
}