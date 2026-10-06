const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

if (input < 10 || input > 20) {
    console.log("yes");
} else {
    console.log("no");
}