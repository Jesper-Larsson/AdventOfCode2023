import Data from "./Data.js";

console.log(
  Data.split("\n")
    .map((row) => row.split("").filter((item) => !isNaN(item)))
    .map((r) => parseInt(r.at(0) + r.at(r.length - 1)))
    .reduce((a, b) => a + b)
);
