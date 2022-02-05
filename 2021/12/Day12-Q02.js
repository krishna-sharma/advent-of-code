const puzzleInput = require("./puzzleInputs");

const connections = {};
puzzleInput.forEach((connection) => {
  const [cave1, cave2] = connection.split("-");
  if (connections[cave1] === undefined) connections[cave1] = [];
  if (connections[cave2] === undefined) connections[cave2] = [];
  if (!connections[cave1].includes(cave2)) connections[cave1].push(cave2);
  if (!connections[cave2].includes(cave1)) connections[cave2].push(cave1);
});

const caves = {};
Object.keys(connections).forEach((caveName) => {
  caves[caveName] = {
    name: caveName,
    isSmall: caveName === caveName.toLowerCase(),
  };
});

const isValidPath = (path) => {
  let isValid = true;
  const caveCounts = {};
  let smallCaveVisitedTwice = false;
  for (caveName of path.split(",")) {
    caveCounts[caveName] = caveCounts[caveName] ? caveCounts[caveName] + 1 : 1;

    if (caves[caveName].isSmall) {
      if (caveCounts[caveName] > 2) {
        // a small cave was visited more than twice
        isValid = false;
        break;
      } else if (caveCounts[caveName] === 2) {
        if (
          caveName === "start" ||
          caveName === "end" ||
          smallCaveVisitedTwice
        ) {
          // start or end cave was visited twice
          // or more than one small caves were visited twice
          isValid = false;
          break;
        } else {
          // a small cave was visited twice
          smallCaveVisitedTwice = true;
        }
      }
    }
  }

  return isValid && path.startsWith("start");
};

const uniquePaths = {};
const seekNewPath = (currentPath) => {
  if (currentPath.endsWith(",end")) {
    uniquePaths[currentPath] = true;
  } else {
    const lastCave = currentPath.split(",").pop();
    for (nextCave of connections[lastCave]) {
      const nextPath = currentPath + "," + nextCave;
      if (isValidPath(nextPath)) {
        seekNewPath(nextPath);
      }
    }
  }
};

console.log(connections);
seekNewPath("start");
console.log(Object.keys(uniquePaths).length);
