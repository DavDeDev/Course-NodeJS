// TODO: Import the module express
const express = require('express')

//TODO: Create an instance of express (Invoke the function)
const app = express()
// is the same as: const app = require('express')()

// Every time the user touches the domain, the callback function is invoked
app.get('/', (req, res) => {
  console.log('user hit the resource')
  // Express automatically sets the status code to 200, but we can manually add it with res.status(200)
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

// .all HTTP verb --> matches ALL HTTP verbs
app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

// TODO: App is an object with many methods
//HTTP verbs --> Represent what the user wants to do
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use --> responsible for using middleware
// app.listen
