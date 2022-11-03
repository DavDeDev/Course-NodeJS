const http = require("http");

// createServer take a call back function that will be executed whenever the user "hits" the serve
//TODO: ALWAYS INCLUDE END() TO END THE RESPONSE
const server = http.createServer((req, res) => {
  //console.log("user hit the server");
  //To get the method of the request
  //console.log(req.method)
  //To get the url of the request
  console.log(req.url)
  //Express takes care of the headers for us
  res.writeHead(200,{"content-type":"text/html"});
  //We can include the content to send to the user in the end() method, but it is better to use write() method
  res.write("<h1>Home Page</h1>");
  res.end();
});

//Port are numbers that are used to identify a specific process that is running on a computer, while we are in development we can use any port we want, but in production we have to use a specific port for the functionality of the app
server.listen(5000);
