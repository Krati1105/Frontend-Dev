let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average = scores.reduce((sum, s) => sum + s, 0) / scores.length;
let passed = scores.filter(s => s >= 50).length;

console.log("------ Array Performance Analyzer ------");
console.log("Scores:", scores.join(", "));
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Average Score: ${average.toFixed(2)}`);
console.log(`Students Passed (≥ 50): ${passed}/${scores.length}`);
console.log("----------------------------------------");
