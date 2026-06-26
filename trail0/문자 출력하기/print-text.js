const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let result = input

for (let i = 0; i < 7; i++) {
    result += input
}
console.log(result);