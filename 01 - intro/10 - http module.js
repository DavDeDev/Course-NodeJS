//HTTP module -> server-side programming
const http = require("http");

//createServer method looks for a callback function
//TODO: both parameters req and res are objects
//req -> in-coming request
//res -> sending back response
const server = http.createServer((req, res) => {
  //console.log(req); -> this will print the request object (huge object)
  console.log(req.url);
  //TODO: we can use the url status to send back different responses
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  else if (req.url === "/about") {
    res.end("Here is our short history");
  }
  //to end the response when none url is matched
  else{res.end(
    `<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`
  )}
});
// What port is the server listening on? it's arbitrary
server.listen(5000);

//TODO: because is a server, it will keep running until we stop it to listen for requests!


// const http = require('http')

// const server = http.createServer((req, res) => {
//   //   if (req.url === '/') {
//   //     res.end('Welcome to our home page')
//   //   }
//   //   if (req.url === '/about') {
//   //     res.end('Here is our short history')
//   //   }
//   //   res.end(`
//   //   <h1>Oops!</h1>
//   // <p>We can't seem to find the page you are looking for</p>
//   // <a href="/">back home</a>
//   //   `)
//   // ###################################
//   // ###################################
//   //
//   //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
//   // SWITCH TO IF, ELSE IF, ELSE (BELOW)
//   // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
//   if (req.url === '/') {
//     res.end('Welcome to our home page')
//   } else if (req.url === '/about') {
//     res.end('Here is our short history')
//   } else {
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
//   }
// })

// server.listen(5000)