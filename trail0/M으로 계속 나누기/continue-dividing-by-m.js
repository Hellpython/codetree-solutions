const fs = require("fs");
let a = fs.readFileSync(0).toString();
let arr = a.split(" ");

let n = arr[0];
let m = arr[1];

// Please write your code here.

let result = '';

if (n >= 2 && m <= 1000000) {
    while (n > 0) {
        result += n + "\n";
        n = Math.floor(n / m);
    }
}

console.log(result);
