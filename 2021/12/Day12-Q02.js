let puzzleInput = [
  "vp-BY",
  "ui-oo",
  "kk-IY",
  "ij-vp",
  "oo-start",
  "SP-ij",
  "kg-uj",
  "ij-UH",
  "SP-end",
  "oo-IY",
  "SP-kk",
  "SP-vp",
  "ui-ij",
  "UH-ui",
  "ij-IY",
  "start-ui",
  "IY-ui",
  "uj-ui",
  "kk-oo",
  "IY-start",
  "end-vp",
  "uj-UH",
  "ij-kk",
  "UH-end",
  "UH-kk",
];

puzzleInput2 = [
  "dc-end",
  "HN-start",
  "start-kj",
  "dc-start",
  "dc-HN",
  "LN-dc",
  "HN-end",
  "kj-sa",
  "kj-HN",
  "kj-dc",
];

puzzleInput3 = [
  "fs-end",
  "he-DX",
  "fs-he",
  "start-DX",
  "pj-DX",
  "end-zg",
  "zg-sl",
  "zg-pj",
  "pj-he",
  "RW-he",
  "fs-DX",
  "pj-RW",
  "zg-RW",
  "start-pj",
  "he-WI",
  "zg-he",
  "pj-fs",
  "start-RW",
];

let connections = {};
puzzleInput.forEach((connection) => {
  const [cave1, cave2] = connection.split("-");
  if (connections[cave1] === undefined) connections[cave1] = [];
  if (connections[cave2] === undefined) connections[cave2] = [];
  if (!connections[cave1].includes(cave2)) connections[cave1].push(cave2);
  if (!connections[cave2].includes(cave1)) connections[cave2].push(cave1);
});

const findPathCombinations = (path) => {
  const lastCave = path[path.length - 1];
  if (lastCave === "end") return null;

  let newPaths = [];
  connections[lastCave].forEach((nextCave) => {
    if (nextCave.toUpperCase() === nextCave) {
      newPaths.push([...path, nextCave]);
    } else {
      if (path.includes(nextCave)) {
        if (nextCave !== "start" && nextCave !== "end") {
          const pathConnections = path.reduce(
            (prev, cur) =>
              Object.assign(prev, {
                [cur]:
                  prev[cur] === undefined || cur.toUpperCase() === cur
                    ? 1
                    : prev[cur] + 1,
              }),
            { [nextCave]: 1 }
          );
          if (
            Object.values(pathConnections).filter((count) => count >= 2)
              .length <= 1 &&
            Object.values(pathConnections).filter((count) => count >= 3)
              .length < 1 &&
            Object.values(pathConnections).length < 100
          ) {
            newPaths.push([...path, nextCave]);
          }
        }
      } else {
        newPaths.push([...path, nextCave]);
      }
    }
  });
  return newPaths;
};

let uniquePaths = ["start"];
let flag;
do {
  flag = false;
  for (let i = 0; i < uniquePaths.length; i++) {
    if (!uniquePaths[i].endsWith("-end")) {
      const newUniquePaths = findPathCombinations(uniquePaths[i].split("-"))
        .map((path) => path.join("-"))
        .filter((path) => !uniquePaths.includes(path));

      if (newUniquePaths.length) {
        uniquePaths = [...uniquePaths, ...newUniquePaths];
        flag = true;
        break;
      }
    }
  }
} while (flag);

uniquePaths = uniquePaths.sort().filter((path) => path.endsWith("-end"));

console.log(uniquePaths.length);
