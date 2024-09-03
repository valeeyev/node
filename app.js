const users = require("./data");

const log = require("./utils");

log("users ");
users.forEach((user) => {
  log(`name : ${user.name}, age : ${user.age}`);
});
