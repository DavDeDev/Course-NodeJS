//Every file in CommonJS is a module (by default)
//Modules - Encapsulated code (only share minimum)
// TODO: Modules help us to organize our code, in fact we can write our functions somewhere else and import them in our main file

//To access the module we use the require function
//We can also assign it to a variable!
//TODO: the module always start with ./ or ../
const names = require('./3.1 - names');
const sayHi = require('./3.2 - utils');
//console.log(names);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

