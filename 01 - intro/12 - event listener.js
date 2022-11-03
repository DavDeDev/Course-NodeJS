const EventEmitter = require('events');

// To create a custom event extend the EventEmitter class
const customEmitter = new EventEmitter();

// on() method is used to listen to an event
// The first argument is the name of the event and the second argument is the callback function
//I can access the parameters passed to the emit() method in the callback function
customEmitter.on('response', (name,id) => {
    console.log(`data received user ${name} with id:${id}`);
});
//I can trigger different logic based on the same even
customEmitter.on('response', () => {
    console.log(`some other logic here`);
});
// emit() method is used to emit an event
//TODO: I first list for the event and THEN emit it
customEmitter.emit('response','john',34);