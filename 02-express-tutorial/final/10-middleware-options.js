//There are few options to use middleware
// 1 - You can create your own middleware
// 2 - Express provides a few built-in middleware
// 3 - You can use third party middleware

const express = require('express')
const app = express()
const morgan = require('morgan')
//  req => middleware => res

// app.use([logger, authorize])
// In express there is a built-in middleware called static, it requires a path to the folder where the static files are located
app.use(express.static('./public'))
// For the third party middleware we need to install it first
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
