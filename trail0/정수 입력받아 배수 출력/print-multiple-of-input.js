const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);

let result = '';

if (N >= 1 && N <= 100) {
    for (let i = 1; i <= 5; i++) {
        result += N * i + " ";
    }
}

console.log(result.trim());