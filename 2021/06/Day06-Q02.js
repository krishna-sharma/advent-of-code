let puzzleInput = [
  1, 4, 2, 4, 5, 3, 5, 2, 2, 5, 2, 1, 2, 4, 5, 2, 3, 5, 4, 3, 3, 1, 2, 3, 2, 1,
  4, 4, 2, 1, 1, 4, 1, 4, 4, 4, 1, 4, 2, 4, 3, 3, 3, 3, 1, 1, 5, 4, 2, 5, 2, 4,
  2, 2, 3, 1, 2, 5, 2, 4, 1, 5, 3, 5, 1, 4, 5, 3, 1, 4, 5, 2, 4, 5, 3, 1, 2, 5,
  1, 2, 2, 1, 5, 5, 1, 1, 1, 4, 2, 5, 4, 3, 3, 1, 3, 4, 1, 1, 2, 2, 2, 5, 4, 4,
  3, 2, 1, 1, 1, 1, 2, 5, 1, 3, 2, 1, 4, 4, 2, 1, 4, 5, 2, 5, 5, 3, 3, 1, 3, 2,
  2, 3, 4, 1, 3, 1, 5, 4, 2, 5, 2, 4, 1, 5, 1, 4, 5, 1, 2, 4, 4, 1, 4, 1, 4, 4,
  2, 2, 5, 4, 1, 3, 1, 3, 3, 1, 5, 1, 5, 5, 5, 1, 3, 1, 2, 1, 4, 5, 4, 4, 1, 3,
  3, 1, 4, 1, 2, 1, 3, 2, 1, 5, 5, 3, 3, 1, 3, 5, 1, 5, 3, 5, 3, 1, 1, 1, 1, 4,
  4, 3, 5, 5, 1, 1, 2, 2, 5, 5, 3, 2, 5, 2, 3, 4, 4, 1, 1, 2, 2, 4, 3, 5, 5, 1,
  1, 5, 4, 3, 1, 3, 1, 2, 4, 4, 4, 4, 1, 4, 3, 4, 1, 3, 5, 5, 5, 1, 3, 5, 4, 3,
  1, 3, 5, 4, 4, 3, 4, 2, 1, 1, 3, 1, 1, 2, 4, 1, 4, 1, 1, 1, 5, 5, 1, 3, 4, 1,
  1, 5, 4, 4, 2, 2, 1, 3, 4, 4, 2, 2, 2, 3,
];

// puzzleInput = [3, 4, 3, 1, 2];

const daysLeft = 256;
let i, j;
let fishCounts = {};
puzzleInput.forEach((lanternFish) => {
  fishCounts[lanternFish] = fishCounts[lanternFish]
    ? fishCounts[lanternFish] + 1
    : 1;
});
for (i = daysLeft; i > 0; i--) {
  const nextFishCount = {};
  Object.keys(fishCounts).forEach((key) => {
    if (parseInt(key) === 0) {
      nextFishCount[8] = nextFishCount[8]
        ? nextFishCount[8] + fishCounts[key]
        : fishCounts[key];
      nextFishCount[6] = nextFishCount[6]
        ? nextFishCount[6] + fishCounts[key]
        : fishCounts[key];
    } else {
      nextFishCount[key - 1] = nextFishCount[key - 1]
        ? nextFishCount[key - 1] + fishCounts[key]
        : fishCounts[key];
    }
  });
  fishCounts = nextFishCount;
}

const totalFishCount = Object.values(fishCounts).reduce(
  (prev, cur) => prev + cur,
  0
);

console.log(`Fish count: ${totalFishCount}`);
