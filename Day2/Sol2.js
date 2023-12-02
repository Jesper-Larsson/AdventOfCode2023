import Data from "./Data.js";

console.log(
  Data.split("\n")
    .map((row) => [
      row.split(": ")[0].split(" ")[1],
      row
        .split(": ")[1]
        .split(", ")
        .flatMap((r) => r.split("; "))
    ])
    .map((r) => {
      let dict = {};
      r[1].forEach(
        (pair) =>
          (dict[pair.split(" ")[1]] = Math.max(
            dict[pair.split(" ")[1]] ?? 0,
            parseInt(pair.split(" ")[0])
          ))
      );
      const sum = Object.values(dict).reduce((a, b) => a * b);
      return [r[0], sum];
    })
    .map((r) => r[1])
    .reduce((a, b) => a + b)
);
