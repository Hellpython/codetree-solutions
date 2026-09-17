const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

let output = input === 1 ? "t" : "f";

console.log(output);