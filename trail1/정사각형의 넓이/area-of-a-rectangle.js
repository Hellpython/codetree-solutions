const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let N = Number(input);

let width = N * N;

if (N >= 5) {
    console.log(`${width}`);
} else {
    console.log(`${width}\ntiny`);
}