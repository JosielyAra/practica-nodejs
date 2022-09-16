const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('free men', os.freemem(), 'bytes');
console.log('Total men', os.totalmem(), 'bytes');