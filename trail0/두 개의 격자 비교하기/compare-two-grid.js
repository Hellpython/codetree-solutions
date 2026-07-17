const fs = require("fs");

const input = fs
    .readFileSync(0)
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);

let index = 0;

const N = input[index++];
const M = input[index++];

const grid1 = [];
const grid2 = [];

// 첫 번째 N × M 격자 입력
for (let i = 0; i < N; i++) {
    const row = [];

    for (let j = 0; j < M; j++) {
        row.push(input[index++]);
    }

    grid1.push(row);
}

// 두 번째 N × M 격자 입력
for (let i = 0; i < N; i++) {
    const row = [];

    for (let j = 0; j < M; j++) {
        row.push(input[index++]);
    }

    grid2.push(row);
}

// 두 격자 비교
const result = [];

for (let i = 0; i < N; i++) {
    const row = [];

    for (let j = 0; j < M; j++) {
        if (grid1[i][j] === grid2[i][j]) {
            row.push(0);
        } else {
            row.push(1);
        }
    }

    result.push(row);
}

// 출력
for (let i = 0; i < N; i++) {
    console.log(result[i].join(" "));
}