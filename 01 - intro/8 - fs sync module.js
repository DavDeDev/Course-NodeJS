// Module to interact with the file system
// TODO: There are two ways to use this module: synchronous (blocking) and asynchronous (non-blocking and RECOMMENDED)

//We destructured the fs module to use only the readFileSync method and not the whole module
const { Console } = require("console");
const { readFileSync, writeFileSync } = require("fs");
// is the same of:
// const fs = require('fs');
// fs.readFileSync

//TODO: test async and sync
console.log('start')

//We read the content of the files (generally UTF-8)
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// We write the content of the files in a new file
// TODO: flag "a" means append, if we don't use it, the file will be overwritten
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");

// In this case JS is reading line by line and it's blocking the execution of the code, until the block is finished