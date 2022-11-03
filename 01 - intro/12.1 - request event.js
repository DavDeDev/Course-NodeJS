const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// TODO: Create a server Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it

//http.createServer() is an extended EventEmitter class, so it has the on() method (check the previous snippet)
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)