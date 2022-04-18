const puzzleInput = require("./puzzleInputs");

const gridSize = [0, 0];
const dots = puzzleInput.dots.map((dot) => {
  const [x, y] = dot.split(",").map((str) => parseInt(str));
  gridSize[0] = Math.max(x + 1, gridSize[0]);
  gridSize[1] = Math.max(y + 1, gridSize[1]);
  return { x, y };
});
const folds = puzzleInput.folds.map((fold) => {
  const [direction, line] = fold.replace("fold along ", "").split("=");
  return { direction, line: parseInt(line) };
});

let x, y, i;
const grid = [];
// create empty grid of proper size
for (y = 0; y < gridSize[1]; y++) {
  grid[y] = [];
  for (x = 0; x < gridSize[0]; x++) {
    grid[y][x] = 0;
  }
}
// mark dots on the grid
for (i = 0; i < dots.length; i++) {
  grid[dots[i].y][dots[i].x] += 1;
}

// do all folds
folds.forEach(({ direction, line }) => {
  if (direction === "y") {
    for (y = line - 1, i = 1; y >= 0; y--, i++) {
      for (x = 0; x < gridSize[0]; x++) {
        if (grid[line + i] && grid[line + i][x]) {
          grid[y][x] = grid[y][x] + grid[line + i][x];
        }
      }
      delete grid[line + i];
    }
    gridSize[1] = line;
  } else {
    for (x = line - 1, i = 1; x >= 0; x--, i++) {
      for (y = 0; y < gridSize[1]; y++) {
        if (grid[y] && grid[y][line + i]) {
          grid[y][x] = grid[y][x] + grid[y][line + i];
        }
        delete grid[y][line + i];
      }
    }
    gridSize[0] = line;
  }
});

for (y = 0; y < gridSize[1]; y++) {
  let str = "";
  for (x = 0; x < gridSize[0]; x++) {
    str += grid[y][x] > 0 ? "#" : " ";
  }
  console.log(str);
}
