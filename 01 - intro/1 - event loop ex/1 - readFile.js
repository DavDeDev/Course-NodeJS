// Event loop: allows node.js to perform non-blocking I/O operations

// We can offload task to the browser and the browser will execute them in the background while the code keep going
//TODO: Event Loop is a queue of callback functions
const {readFile} = require('fs');

console.log('start a first task');

//ReadFile is asynchronous
//Run the callback function only when the main function sends an error or result
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
});

console.log('starting next task');
readFile('./content/second.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed second task');
});