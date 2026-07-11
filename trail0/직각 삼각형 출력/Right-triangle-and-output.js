const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let N = Number(input);

for (let i = 1; i <= N; i++) {
    let line = "";

    for (let j = 1; j <= 2 * i - 1; j++) {
        line += "*";
    }

    console.log(line);
}