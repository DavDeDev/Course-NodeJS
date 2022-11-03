//We require some built-in modules like http, fs, path, os, etc.
const os = require('os');
//TODO: now you can use methods and properties of os module!!

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
const uptime = os.uptime();
console.log(`The system has been running for ${uptime} seconds`);

// info about operating system
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);