const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const year = Number(input);

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
  console.log("true");
} else {
  console.log("false");
}