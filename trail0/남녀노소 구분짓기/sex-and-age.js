const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

const gender = Number(input[0]);
const age = Number(input[1]);

if (gender === 0 && age >= 19) {
  console.log("MAN");
} else if (gender === 1 && age >= 19) {
  console.log("WOMAN");
} else if (gender === 0 && age < 19) {
  console.log("BOY");
} else {
  console.log("GIRL");
}