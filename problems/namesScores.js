const fs = require("fs");
const names = fs.readFileSync("./names.txt", "utf-8").split(",");
const letterValue = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26
};

const getNameScores = function(names) {
  let score = 0;
  names.sort();
  for (let index = 0; index < names.length; index++) {
    names[index].split("").forEach(x => (score += letterValue[x] * (index + 1)));
  }
  return score;
};
console.log(getNameScores(names));
