import { Utils } from '../services/utils.service.js';
import Axios from "axios"

const KEY = 'books'
export default {
  books,
  query,
  getById,
  addReview,
  removeReview,
  addGoogleBook,
  findNextBook,
  removeBook
}


const BASE_URL = 'http://localhost:3030/api/book';
var books = null;

async function query() {
  let returnedBooks;
  returnedBooks = await Axios.get(`${BASE_URL}`)
  books = returnedBooks.data
  Utils.saveToStorage(KEY, books)
  return books
}

async function addReview(review) {
  return await Axios.post(`${BASE_URL}/review`, review)
}


async function removeReview(review) {
  return await Axios.delete(`${BASE_URL}/review`, { data: review })
}

async function getById(bookId) {
  const book = await Axios.get(`${BASE_URL}/${bookId}`)
  return book.data
}


async function addGoogleBook(book) {
  return await Axios.post(`${BASE_URL}/googlebook`, book)
}

async function removeBook(book) {
  return await Axios.delete(`${BASE_URL}/bookId`, { data: book })
}


async function findNextBook(bookId) {
  const currBook = await getById(bookId)
  const idx = books.findIndex(book => book.id === currBook.id)
  const nextBook = books[idx + 1]
  return nextBook
}
