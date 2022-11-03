const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});

//listen method is asynchronous, and it will keep waiting for requests in the Event Loop
server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
