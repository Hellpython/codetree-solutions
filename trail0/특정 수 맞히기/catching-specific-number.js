const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

for (let i = 0; i < input.length; i++) {
    let num = input[i];

    if (num < 25) {
        console.log("Higher");
    } else if (num > 25) {
        console.log("Lower");
    } else {
        console.log("Good");
        break;
    }
}