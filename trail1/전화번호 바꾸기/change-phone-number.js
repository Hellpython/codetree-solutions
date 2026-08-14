const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [number, forwardNumber, backwardNumber] = input.split("-");

console.log(`${number}-${backwardNumber}-${forwardNumber}`);