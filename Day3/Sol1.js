import Data from "./Data.js";

let cells = Data.split("\n").map((row) => row.split(""));
console.log(
  cells
    .map((row, y) => {
      let foundParts = [];
      for (let x = 0; x < row.length; x++) {
        let numStr = "";
        let isPart = false;
        while (!isNaN(cells[y][x])) {
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              if (
                y + i >= 0 &&
                y + i < cells.length &&
                x + j >= 0 &&
                x + j < row.length
              ) {
                if (isNaN(cells[y + i][x + j]) && cells[y + i][x + j] !== ".") {
                  isPart = true;
                }
              }
            }
          }
          numStr += cells[y][x++];
        }
        if (isPart) {
          foundParts.push(parseInt(numStr));
        }
      }
      return foundParts;
    })
    .map((r) => (r.length > 0 ? r.reduce((a, b) => a + b) : 0))
    .reduce((a, b) => a + b)
);
