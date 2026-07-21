const fs = require("fs");

const N = Number(fs.readFileSync(0).toString().trim());

for (let i = 0; i < N; i++) {
    let result = "";

    if (i % 2 === 0) {
        // 0, 2, 4번째 줄: 왼쪽에서 오른쪽
        for (let j = 1; j <= N; j++) {
            result += j;
        }
    } else {
        // 1, 3, 5번째 줄: 오른쪽에서 왼쪽
        for (let j = N; j >= 1; j--) {
            result += j;
        }
    }

    console.log(result);
}