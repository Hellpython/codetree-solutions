const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

let status = input === 100 ? "pass" : "failure";

console.log(status);