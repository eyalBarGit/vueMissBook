const Utils = require('../../server/services/utils.service.js')
var books = require('../../data/booksdb.json')
const fs = require('fs');
const KEY = 'books'
const color = require("cli-color");
const errMsg = color.red.bold
const scsMsg = color.green.bold
const message = color.blue.bold

async function query() {
  return await books
}

async function addReview(review) {
  const bookId = review.bookId
  const currBook = await books.find(book => book.id === bookId)
  review.id = Utils.getRandomId()
  if (!currBook.reviews) {
    currBook.reviews = [review]
    return await _saveToFile()
  } else {
    currBook.reviews.push(review)
    return await _saveToFile()
  }
}

async function removeReview(review) {
  const bookId = review.bookId
  const currBook = await getById(bookId)
  const revIdx = currBook.reviews.findIndex(rev => rev.id === review.id)
  currBook.reviews.splice(revIdx, 1)
  return await _saveToFile()
}

async function getById(bookId) {
  let currBook = await books.find(book => book.id === bookId)
  return currBook

}

async function addGoogleBook(book) {
  var convertedBook = await new _convertGoogleBook(book)
  console.log(message('this is convertedBook: '), convertedBook)
  console.log(message('this is booksLength: '), books.length)
  books.unshift(convertedBook)
  return await _saveToFile()

}

function _convertGoogleBook(book) {
  const currBook = {}
  currBook.id = book.id
  currBook.title = book.volumeInfo.title
  currBook.subtitle = book.volumeInfo.subtitle
  currBook.authors = book.volumeInfo.authors
  currBook.publishedDate = book.volumeInfo.publishedDate
  currBook.description = book.volumeInfo.description
  currBook.pageCount = book.volumeInfo.pageCount
  currBook.categories = book.volumeInfo.categories
  currBook.listPrice = {
    isOnSale: book.saleInfo.saleability === 'FREE' ? 'free' : false,
    currencyCode: book.saleInfo.country,
    amount: book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : ''
  }
  book.volumeInfo.imageLinks ? currBook.thumbnail = book.volumeInfo.imageLinks.thumbnail : ''
  currBook.language = book.volumeInfo.language
  return currBook
}


async function removeBook(bookId) {
  const idx = await books.findIndex(book => book.id === bookId)
  await books.splice(idx, 1)
  console.log(books.length)
  return await _saveToFile()
}



async function findNextBook(bookId) {
  const currBook = await getById(bookId)
  const idx = books.findIndex(book => book.id === currBook.id)
  const nextBook = books[idx + 1]
  return nextBook
}

function _saveToFile() {
  return new Promise((resolve, reject) => {
    const str = JSON.stringify(books, null, 2);
    fs.writeFile('./data/booksdb.json', str, function (err) {
      if (err) {
        console.log(errMsg('PROBLEM :'), err)
        return reject(new Error(errMsg('Cannot update books file'), err));
      }
      console.log(scsMsg('SAVED !!'))
      resolve()
    });

  });


}






module.exports = {
  query,
  getById,
  addReview,
  removeReview,
  addGoogleBook,
  removeBook
}