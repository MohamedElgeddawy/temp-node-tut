const { log } = require('console')
const os = require('os')

console.log(os.userInfo());

console.log(os.uptime());

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalMem(),
  freeMem: os.freemem(),
}

console.log(currentOs);