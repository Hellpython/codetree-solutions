const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [h, w] = input.split(" ").map(Number);
let b = (10000 * w) / (h * h);

if (b >= 25) {
    console.log(`${parseInt(b)}\nObesity`);
} else {
    console.log(`${parseInt(b)}`);
}