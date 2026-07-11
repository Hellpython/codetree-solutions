const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let N = Number(input);

for (let i = N; i >= 1; i--) {
    let line = "";

    for (let j = 1; j <= i; j++) {
        line += "* ";
    }

    console.log(line.trim());
}