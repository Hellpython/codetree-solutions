const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let A = Number(input[0]);
let N = Number(input[1]);

let result = A;

if (A >= 1 && A <= 10 && N >= 1 && N <= 10) {
    for (let i = 0; i < N; i++) {
        result += N
        console.log(result);
    }
}

