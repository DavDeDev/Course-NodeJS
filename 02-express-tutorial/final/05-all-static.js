const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

// README: There are two ways to send back a file to the client
// 1. Storing the file in the public folder (as static file) and sending it back with res.sendFile()
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//  
// 2. Using the template engine (SSR - Server Side Rendering) and sending it back with res.render()
// })

//Server will automatically send an index.html file if it exists when the user hits the root path '/', so we don't need to setup a route for it


app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
