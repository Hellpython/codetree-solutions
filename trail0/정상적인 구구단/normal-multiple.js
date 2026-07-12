const fs = require("fs");

const input = fs.readFileSync(0).toString().trim();
const N = Number(input);

for (let i = 1; i <= N; i++) {
  let line = "";

  for (let j = 1; j <= N; j++) {
    line += `${i} * ${j} = ${i * j}`;

    if (j !== N) {
      line += ", ";
    }
  }

  console.log(line);
}