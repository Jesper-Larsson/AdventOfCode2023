import Data from "./Data.js";

//console.log(Data);
let totals = [];

//console.log(
let winnerNums = Data.split("\n")
  .map((r) =>
    r
      .split(": ")
      .slice(1)
      .flatMap((r) => r.split(" | ").map((part) => part.trim()))
  )
  .map((r) => [
    r[0].split(" ").filter((item) => item !== ""),
    r[1].split(" ").filter((item) => item !== ""),
  ])

  .map((r) => r[0].map((item) => (r[1].includes(item) ? parseInt(item) : null)))
  .map((r) => r.filter((item) => item !== null).length);
/*
    .flatMap((r) => {
      let val = 0;
      r.forEach((item) => {
        val === 0 ? (val = 1) : (val *= 2);
      });
      return val;
    })
    .reduce((a, b) => a + b)
//);*/
let count = 0;

console.log(winnerNums);
const addScoreForCard = (index) => {
  count++;

  for (let i = 1; i <= winnerNums[index]; i++) {
    //console.log("idx: " + index + ", totcount: " + count);
    addScoreForCard(index + i);
  }
};
//addScoreForCard(0);
winnerNums.forEach((num, index) => addScoreForCard(index));
console.log(count);
