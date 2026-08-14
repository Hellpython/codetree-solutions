const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [year, month, day] = input.split(".");

console.log(`${month}-${day}-${year}`);