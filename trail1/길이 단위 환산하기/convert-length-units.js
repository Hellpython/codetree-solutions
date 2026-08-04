const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);
let ft = 30.48;

console.log((N * ft).toFixed(1));