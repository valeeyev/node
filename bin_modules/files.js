//* sync file modules in node
// const fileSystem = require("fs");
// const log = require("../utils");

// const first = fileSystem.readFileSync("./content/first.txt", "utf-8");
// const second = fileSystem.readFileSync("./content/second.txt", "utf-8");
// console.log(first, second);

// fileSystem.writeFileSync(
//   "./content/result.txt",
//   `here is the result: ${first}, second: ${second}`,
//   { flag: "a" }
// );

// * async file system
const { error } = require("console");
const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return 0;
  }
  console.log(result);
});
