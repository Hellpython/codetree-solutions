const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const word1 = input[0];
const word2 = input[1];

if (word1.length > word2.length) {
    console.log(word1, word1.length);
} else if (word1.length < word2.length) {
    console.log(word2, word2.length);
} else {
    console.log("same");
}