const puzzleInput = require("./puzzleInputs");

const template = puzzleInput.template.split("");
const pairs = {};
puzzleInput.pairs.forEach((pair) => {
  const [key, value] = pair.split(" -> ");
  pairs[key] = value;
});

const counts = {};
const cache = {};

// add counts from y and z into x
const mergeCounts = (x, y, z) => {
  for (const key in y) x[key] = (x[key] || 0) + y[key];
  for (const key in z) x[key] = (x[key] || 0) + z[key];
  return x;
};

const doStep = (a, b, stepsLeft) => {
  if (cache[a + b + stepsLeft]) return cache[a + b + stepsLeft];
  if (stepsLeft) {
    const c = pairs[a + b];
    cache[a + b + stepsLeft] = mergeCounts(
      { [c]: 1 },
      doStep(a, c, stepsLeft - 1),
      doStep(c, b, stepsLeft - 1)
    );
  } else {
    cache[a + b + stepsLeft] = {};
  }
  return cache[a + b + stepsLeft];
};

counts[template[0]] = 1;
for (let pos = 1; pos < template.length; pos++) {
  mergeCounts(
    counts,
    { [template[pos]]: 1 },
    doStep(template[pos - 1], template[pos], 40)
  );
}
console.log(counts, "with cache entry count", Object.keys(cache).length);
const sortedCounts = Object.values(counts).sort((a, b) => a - b);
console.log(
  `${sortedCounts[sortedCounts.length - 1]} - ${sortedCounts[0]} =`,
  sortedCounts[sortedCounts.length - 1] - sortedCounts[0]
);
