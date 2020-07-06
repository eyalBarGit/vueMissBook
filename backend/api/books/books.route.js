const express = require('express')
const { query, getById, addReview ,removeReview,addGoogleBook,removeBook} = require('./books.controller')
const mongodb = require('mongodb')

const router = express.Router();

//Get books
router.get('/', query)
router.get('/:id', getById)
router.post('/review', addReview)
router.delete('/review', removeReview)
router.post('/googlebook', addGoogleBook)
router.delete('/bookId', removeBook)

// async function loadBooksCollection(){
//   const client = await mongodb.MongoClient.connect('mongodb+srv://eyal:1234@miss-book.7lnnn.mongodb.net/<dbname>?retryWrites=true&w=majority')
// }

module.exports = router;