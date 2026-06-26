const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);


if (N >= 1 && N <= 10) {
    for (let i = 0; i < N; i++) {
        console.log('LeebrosCode');
    }
}