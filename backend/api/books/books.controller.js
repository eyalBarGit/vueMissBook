const bookService = require('./book.service')
const bodyParser = require('body-parser')
const express = require('express')
const color = require("cli-color");
const errMsg = color.red.bold
const scsMsg = color.green.bold
const message = color.blue.bold
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))




async function query(req, res) {
  const books = await bookService.query()
  res.send(books)
}


async function getById(req, res) {
  const { id } = req.params
  const currBook = await bookService.getById(id)
  res.json(currBook)
}

async function addReview(req, res) {
  const review = req.body
  await bookService.addReview(review)
  res.end()
}

async function removeReview(req, res) {
  const review = req.body
  await bookService.removeReview(review)
  res.end()
}


async function addGoogleBook(req, res) {
  const book = req.body
  await bookService.addGoogleBook(book)
  res.end()
}


async function removeBook(req, res) {
  const bookId = req.body.id
  console.log('this is bookId from bookConroller', bookId)
  await bookService.removeBook(bookId)
  res.end()
}



module.exports = {
  query,
  getById,
  addReview,
  removeReview,
  addGoogleBook,
  removeBook
}
