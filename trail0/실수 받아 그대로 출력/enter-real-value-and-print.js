const fs = require("fs");

let N = Number(fs.readFileSync(0).toString().trim());

if (N >= 0 && N <= 50) {
    console.log(N.toFixed(2));
}