const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

if (input >= 100) {
    console.log("vapor");
} else if (input < 0) {
    console.log("ice")
} else {
    console.log("water");
}