const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const a = input[0];
const b = input[1];
const c = input[2];

let middle;

if ((a >= b && a <= c) || (a >= c && a <= b)) {
  middle = a;
} else if ((b >= a && b <= c) || (b >= c && b <= a)) {
  middle = b;
} else {
  middle = c;
}

console.log(middle);