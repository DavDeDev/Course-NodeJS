//path module
const path = require("path");

//shows the separator used by Windows in this case
console.log(path.sep);

//it joins the path with os standard separator
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//it returns the base name of the file
const base = path.basename(filePath);
console.log(base);

//It returns the absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);