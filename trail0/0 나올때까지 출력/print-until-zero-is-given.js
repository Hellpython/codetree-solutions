const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

let result = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) {
        break;
    }

    result.push(input[i]);
}

console.log(result.join("\n"));