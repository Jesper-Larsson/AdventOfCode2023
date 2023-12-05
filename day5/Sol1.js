import Data from "./Data.js";

let allNums = Data.split("\n\n").map((r) =>
  r
    .split(":")[1]
    .replace("\n", " ")
    .split("\n")
    .map((section) =>
      section
        .trim()
        .split(" ")
        .map((num) => parseInt(num))
    )
);
let startValues = allNums[0][0];
for (let typeRow = 1; typeRow < allNums.length; typeRow++) {
  let newValues = [];
  startValues.forEach((val) => {
    let foundMapping = false;
    for (let mapperRow = 0; mapperRow < allNums[typeRow].length; mapperRow++) {
      const [destStart, sourceStart, sourceLenght] =
        allNums[typeRow][mapperRow];
      if (val >= sourceStart && val < sourceStart + sourceLenght) {
        newValues.push(destStart - sourceStart + val); //more lgoik here
        foundMapping = true;
        break;
      }
    }
    if (!foundMapping) {
      newValues.push(val);
    }
  });
  startValues = newValues;
}
console.log(Math.min(...startValues));
