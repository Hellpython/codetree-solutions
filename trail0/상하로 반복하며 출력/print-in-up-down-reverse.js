const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < N; i++) {
    let result = "";

    for (let j = 0; j < N; j++) {
        if (j % 2 === 0) {
            result += i + 1;
        } else {
            result += N - i;
        }
    }

    console.log(result);
}