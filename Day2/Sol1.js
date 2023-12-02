import Data from "./Data.js";

const allowedCounts = {
  red: 12,
  green: 13,
  blue: 14
};

console.log(
  Data.split("\n")
    .map((row) => [
      row.split(": ")[0].split(" ")[1],
      row
        .split(": ")[1]
        .split(", ")
        .flatMap((r) => r.split("; "))
    ])
    .filter(
      (arr) =>
        !arr[1].some(
          (colorSet) =>
            allowedCounts[colorSet.split(" ")[1]] <
            parseInt(colorSet.split(" ")[0])
        )
    )
    .map((r) => parseInt(r[0]))
    .reduce((a, b) => a + b)
);
