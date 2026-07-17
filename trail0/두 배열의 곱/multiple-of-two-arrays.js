const fs = require("fs");

const input = fs
    .readFileSync(0)
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

const arr1 = [];
const arr2 = [];

// 첫 번째 3×3 배열
for (let i = 0; i < 3; i++) {
    arr1.push(input.slice(i * 3, i * 3 + 3));
}

// 두 번째 3×3 배열
for (let i = 0; i < 3; i++) {
    arr2.push(input.slice(9 + i * 3, 9 + i * 3 + 3));
}

// 같은 위치의 값끼리 곱해서 출력
for (let i = 0; i < 3; i++) {
    const result = [];

    for (let j = 0; j < 3; j++) {
        result.push(arr1[i][j] * arr2[i][j]);
    }

    console.log(result.join(" "));
}