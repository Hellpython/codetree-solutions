const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let N = Number(input);

if (N < 0) {
    console.log(`${N}\nminus`);
} else {
    console.log(`${N}`);
}
