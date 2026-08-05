const fs = require("fs");
let input = fs.readFileSync(0).toString();
let arr = input.split(" ");

let A = Number(arr[0]);
let B = Number(arr[1]);

let sum = A + B;

console.log(`${A} ${B} ${sum}`);