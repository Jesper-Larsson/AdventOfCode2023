import Data from "./Data.js";

let cells = Data.split("\n").map((row) => row.split(""));
let gearsAdjacent = {};
cells.forEach((row, y) => {
  for (let x = 0; x < row.length; x++) {
    let numStr = "";
    let isPart = false;
    let foundAtKey = "";
    while (!isNaN(cells[y][x])) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (
            y + i >= 0 &&
            y + i < cells.length &&
            x + j >= 0 &&
            x + j < row.length
          ) {
            if (cells[y + i][x + j] === "*") {
              foundAtKey = "y" + (y + i) + "x" + (x + j);
              isPart = true;
            }
          }
        }
      }
      numStr += cells[y][x++];
    }
    if (isPart) {
      if (gearsAdjacent[foundAtKey] !== undefined) {
        gearsAdjacent[foundAtKey].push(parseInt(numStr));
      } else {
        gearsAdjacent[foundAtKey] = [parseInt(numStr)];
      }
    }
  }
});
console.log(
  Object.values(gearsAdjacent)
    .filter((arr) => arr.length === 2)
    .map((arr) => arr[0] * arr[1])
    .reduce((a, b) => a + b)
);
