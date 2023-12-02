import Data from "./Data.js";

const replacements = [
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
  ["four", "4"],
  ["five", "5"],
  ["six", "6"],
  ["seven", "7"],
  ["eight", "8"],
  ["nine", "9"],
];
console.log(
  Data.split("\n")
    .map((r) => {
      replacements.forEach(
        (replacement) =>
          (r = r.replaceAll(
            replacement[0],
            replacement[0] + replacement[1] + replacement[0]
          ))
      );
      return r;
    })
    .map((row) => row.split("").filter((item) => !isNaN(item)))
    .map((r) => parseInt(r.at(0) + r.at(r.length - 1)))
    .reduce((a, b) => a + b)
);
