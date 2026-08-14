const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [forwardId, backwardId] = input.split("-");

console.log(`${forwardId}${backwardId}`);

