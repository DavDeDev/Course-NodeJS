//Streams: read sequentially, write sequentially

//Writeable,readable, duplex, transform are extension of event emitter, so we can use on, emit, once, removeListener

//When we use the syncronous or asyncronous methods, we are reading the whole file and then we are writing it in the new file. This is not efficient, because we are using a lot of memory. We can use streams to read the file line by line and write it in the new file line by line. This way we are not using a lot of memory.
const { createReadStream } = require("fs");

//By default the size of the buffer is 64kb, but we can control it with the {highWaterMark:X} option
// We can set up the encoding in the options {encoding: 'utf-8'}

const stream = createReadStream("./content/big.txt");

stream.on("data", (result) => {
  console.log(result);
});

//We also have the error event
stream.on('error',(err)=>console.log(err));



//I don't set up the big file! So check the video