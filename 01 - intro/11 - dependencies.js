//NPM comes with node.js
//TODO: a tipical node.js app will have more than few packages installed as dependencies
//TODO: package/models/dependencies/sharable javascript code = reusable code contains javascript code
//TODO: there is no control in NPM over the code you are installing

//We can install package as locally -> only for this project
//npm i <package name>

//we can install package as globally -> for all projects
//npm install -g <package name>

//package.json -> manifest file (stores important info about project/package)
//manual approach (create the file and add the info)
// auto approach (npm init)
// auto default approach (npm init -y)

// TODO: if we want to a local package it will be store as a dependency in the package.json
// TODO: All dependencies are stored in the node_modules folder

// lodash doesn't need other dependencies so it shows only one folder in node_modules
// bootstrap has many dependencies so it shows many folders in node_modules => popper.js and jquery


//TODO: common convention is to store lodash with _
const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

//lodash has a method to flatten the array
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello world");

//TODO: package-lock.json -> stores the exact version of the package that was installed
//TODO: package.json is fundamental when sharing the project with other developers, because you can run npm install and it will install all the dependencies in the package.json file

//Dev dependencies -> packages that are used only in development, not in production
//"scripts" property in package.json -> we can add scripts that we can run from the command line