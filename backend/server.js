const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

//Middleware:
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

//Routes:
const books = require('./api/books/books.route')
app.use('/api/book', books)


const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
  console.log(`listenning to port: ${PORT}`)
})
