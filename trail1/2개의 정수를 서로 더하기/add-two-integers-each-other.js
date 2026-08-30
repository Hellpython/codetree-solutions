const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [a, b] = input.split(" ").map(Number);



console.log(`${a + b} ${b + a + b}`);