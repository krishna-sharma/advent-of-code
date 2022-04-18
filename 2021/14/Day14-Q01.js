const puzzleInput = require("./puzzleInputs");
let step, pos, nextTemplate;
const pairs = {};
puzzleInput.pairs.forEach((pair) => {
  const [key, value] = pair.split(" -> ");
  pairs[key] = value;
});
let template = puzzleInput.template.split("");
for (step = 1; step <= 10; step++) {
  nextTemplate = [template[0]];
  for (pos = 1; pos < template.length; pos++) {
    const pair = `${template[pos - 1]}${template[pos]}`;
    nextTemplate.push(pairs[pair], template[pos]);
  }
  template = nextTemplate;
}

const counts = {};
for (pos = 0; pos < template.length; pos++) {
  counts[template[pos]] = counts[template[pos]] ? counts[template[pos]] + 1 : 1;
}
console.log(counts);
const sortedCounts = Object.values(counts).sort((a, b) => a - b);
console.log(
  `${sortedCounts[sortedCounts.length - 1]} - ${sortedCounts[0]} =`,
  sortedCounts[sortedCounts.length - 1] - sortedCounts[0]
);
