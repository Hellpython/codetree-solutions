const fs = require("fs");

let a = Number(fs.readFileSync(0).toString().trim());

if (a >= 1 && a <= 100) {
    a += 2;
    console.log(a);
}

