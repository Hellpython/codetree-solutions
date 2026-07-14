const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const N = Number(input);

let num = 1;

for (let i = 1; i <= N; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
        line += num + " ";
        num++;
    }

    console.log(line.trim());
}