const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let a = Number(input);

if (a >= 113) {
    console.log(1);
} else {
    console.log(0);
}