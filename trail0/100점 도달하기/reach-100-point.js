const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let N = Number(input);

let result = [];

for (let score = N; score <= 100; score++) {
    if (score >= 90) {
        result.push("A");
    } else if (score >= 80) {
        result.push("B");
    } else if (score >= 70) {
        result.push("C");
    } else if (score >= 60) {
        result.push("D");
    } else {
        result.push("F");
    }
}

console.log(result.join(" "));