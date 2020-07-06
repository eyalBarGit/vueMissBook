import bookService from "../services/bookService"

const state = {
  books: [],
  filterBy: {
    byName: '',
    fromPrice: '',
    toPrice: ''
  },
  currBook: {},
}
const mutations = {
  setBooks(state, payload) {
    state.books = payload
  },
  addBook(state, payload) {
    state.books.unshift(payload)
  },
  setFilterBy(state, payload) {
    state.filterBy = payload
  },
  setCurrBook(state, currBookId) {
    state.currBook = currBookId
    console.log('state: ', state)
  },
}
const getters = {
  getBooks(state) {
    let filteredBooks = state.books
    if (state.filterBy.byName) {
      filteredBooks = filteredBooks.filter(book => book.title.toLowerCase().includes(state.filterBy.byName.toLowerCase()))
    }
    if (state.filterBy.fromPrice) {
      filteredBooks = filteredBooks.filter(book => book.listPrice.amount >= state.filterBy.fromPrice)
    }
    if (state.filterBy.toPrice) {
      filteredBooks = filteredBooks.filter(book => book.listPrice.amount <= state.filterBy.toPrice)
    }
    return filteredBooks
  },
  getPrevBook() {
    return state.prevBook
  },
  getCurrBook(state) {
    return state.currBook
  },
  getNextBook() {
    const currBook = state.books.find(book => book.id === state.currBook.id)
    const idx = state.books.findIndex(book => book.id === currBook.id)
    const nextBook = state.books[idx + 1]
    return nextBook.id
  }
}
const actions = {
  async loadBooks({ commit }) {
    let books = await bookService.query()
    commit('setBooks', books)
  },
  async addGoogleBook({ commit }, book) {
    let googleBook = await bookService.addGoogleBook(book)
    commit('addBook', googleBook)
  },
  async removeBook({ commit }, book){
    console.log('book id from store: ',book)
    await bookService.removeBook(book)
    commit
  },
  updateFilterBy({ commit }, newVal) {
    commit('setFilterBy', newVal)
  },
  updateCurrBook({ commit }, currBook) {
    commit('setCurrBook', currBook)
  },
  async updateNextBook({ commit }) {
    const nextBook = await bookService.findNextBook(state.currBook.id);
    commit('setNextBook', nextBook)
  },
  updatePrevBook({ commit }, prevBook) {
    console.log('this is prevBook:', prevBook)
    commit('setPrevBook', prevBook)
  },
}

export default {
  state,
  mutations,
  getters,
  actions
}