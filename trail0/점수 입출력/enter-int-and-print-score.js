const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

if (N >= 1 && N <= 1000) {
    console.log("Your score is", N, "point.");
}

