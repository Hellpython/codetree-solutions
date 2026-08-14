const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let time = input.split(":");

let hour = Number(time[0]);
let minute = Number(time[1]);

hour = hour + 1;

console.log(`${hour}:${minute}`);