let puzzleInput = [
  "2566885432",
  "3857414357",
  "6761543247",
  "5477332114",
  "3731585385",
  "1716783173",
  "1277321612",
  "3371176148",
  "1162578285",
  "6144726367",
];

puzzleInput2 = [
  "5483143223",
  "2745854711",
  "5264556173",
  "6141336146",
  "6357385478",
  "4167524645",
  "2176841721",
  "6882881134",
  "4846848554",
  "5283751526",
];

puzzleInput3 = ["11111", "19991", "19191", "19991", "11111"];

puzzleInput = puzzleInput.map((inputLine) =>
  inputLine.split("").map((energy) => parseInt(energy))
);

const printGrid = (puzzleIn, prefix) => {
  for (let i = 0; i < puzzleIn.length; i++) {
    console.log(
      prefix,
      puzzleIn[i].map((energy) => energy.toString(16)).join("")
    );
  }
};

let i, j, steps;
printGrid(puzzleInput, "start ");

const increaseEnergy = (y, x) => {
  if (
    puzzleInput[y] !== undefined &&
    puzzleInput[y][x] !== undefined &&
    puzzleInput[y][x] <= 9
  )
    puzzleInput[y][x] += 1;
};

steps = 0;
let flashes = 0;
while (steps < 500) {
  // increase energy by 1
  for (i = 0; i < puzzleInput.length; i++) {
    for (j = 0; j < puzzleInput[i].length; j++) {
      increaseEnergy(i, j);
    }
  }

  let flashed = false;
  let alreadyFlashed = [];

  do {
    flashed = false;
    for (i = 0; i < puzzleInput.length; i++) {
      for (j = 0; j < puzzleInput[i].length; j++) {
        let flashIndex = `i${i}j${j}`;
        if (puzzleInput[i][j] > 9 && !alreadyFlashed.includes(flashIndex)) {
          flashed = true;
          alreadyFlashed.push(flashIndex);
          increaseEnergy(i - 1, j - 1);
          increaseEnergy(i - 1, j);
          increaseEnergy(i - 1, j + 1);
          increaseEnergy(i, j - 1);
          increaseEnergy(i, j + 1);
          increaseEnergy(i + 1, j - 1);
          increaseEnergy(i + 1, j);
          increaseEnergy(i + 1, j + 1);
        }
      }
    }
  } while (flashed === true);

  for (i = 0; i < puzzleInput.length; i++) {
    for (j = 0; j < puzzleInput[i].length; j++) {
      if (puzzleInput[i][j] > 9) {
        puzzleInput[i][j] = 0;
        flashes += 1;
      }
    }
  }

  steps += 1;

  if (alreadyFlashed.length === puzzleInput.length * puzzleInput[0].length) {
    console.log(`All flash at step ${steps}`);
    break;
  }
}

console.log({ flashes });
