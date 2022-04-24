const puzzleInput = require("./puzzleInputs");
const startTime = Date.now();

// its a square so end row and end column are same
const endPos = puzzleInput.length - 1;
const riskLevelGrid = [];
for (riskLevelRow of puzzleInput) {
  riskLevelGrid.push(riskLevelRow.split("").map((n) => parseInt(n)));
}

const paths = [];
for (let row = 0; row <= endPos; row++) {
  paths[row] = [];
  let tmpRisk = 0;
  for (let prevRow = 0; prevRow < row; prevRow++) {
    tmpRisk += riskLevelGrid[prevRow][0];
  }
  for (let col = 0; col <= endPos; col++) {
    tmpRisk += riskLevelGrid[row][col];
    paths[row][col] = tmpRisk;
  }
}
const doAStep = (point, risk) => {
  const [row, col] = point;
  if (risk >= paths[row][col]) return;

  paths[row][col] = risk;

  if (row > 0) {
    const up = [row - 1, col];
    doAStep(up, risk + riskLevelGrid[row - 1][col]);
  }
  if (col < endPos) {
    const right = [row, col + 1];
    doAStep(right, risk + riskLevelGrid[row][col + 1]);
  }
  if (row < endPos) {
    const down = [row + 1, col];
    doAStep(down, risk + riskLevelGrid[row + 1][col]);
  }
  if (col > 0) {
    const left = [row, col - 1];
    doAStep(left, risk + riskLevelGrid[row][col - 1]);
  }
};
doAStep([0, 0], 0);

console.log("lowestTotalRisk", paths[endPos][endPos]);
console.log("Elapsed time", Date.now() - startTime);
