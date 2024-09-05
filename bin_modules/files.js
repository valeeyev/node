//file modules in node
const fileSystem = require("fs");
const log = require("../utils");

const first = fileSystem.readFileSync("./content/first.txt", "utf-8");
const second = fileSystem.readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

fileSystem.writeFileSync(
  "./content/result.txt",
  `here is the result: ${first}, second: ${second}`
);
