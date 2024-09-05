//filepath module
const path = require("path");
const log = require("../utils");

log(path.sep);
const filepath = path.join("content", "subname", "text.txt");
log(filepath);

const baseName = path.basename(filepath);
log(baseName);
const abs = path.resolve(__dirname, "content", "subname", "text.txt");
log(abs);
