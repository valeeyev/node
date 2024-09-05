const log = require("../utils");
const os = require("os");
const user = os.userInfo();
log(user);

//methods
log(`system uptime ${os.uptime()}`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

log(currentOs);
