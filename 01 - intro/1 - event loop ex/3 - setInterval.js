//setInterval is asynchronous
// and when it's done the callback function will be processed
setInterval(() => {
    console.log('Hello World!');
},2000)
console.log('I will run first even if I am written after');
