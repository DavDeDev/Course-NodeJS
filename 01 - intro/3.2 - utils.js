const sayHi = (name) => {
    console.log(`hello there ${name}`);
  }

//TODO:There are multiple ways to export a module!

// We don't need curly braces because we are exporting only one thing
module.exports = sayHi;