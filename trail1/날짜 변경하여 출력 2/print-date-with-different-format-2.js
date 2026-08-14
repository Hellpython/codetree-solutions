const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [month, day, year] = input.split("-");

console.log(`${year}.${month}.${day}`);
