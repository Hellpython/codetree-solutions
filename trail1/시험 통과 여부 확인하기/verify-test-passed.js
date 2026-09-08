const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let N = Number(input);

if (N >= 80) {
    console.log("pass");
} else {
    console.log(`${80 - N} more score`);
}