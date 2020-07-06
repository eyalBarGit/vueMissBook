import Vue from 'vue'
import Vuex from 'vuex'
import snackBarStore from '../store/snackBar.STORE.js'
import booksStore from '../store/books.STORE.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    snackBarStore,
    booksStore
  }
})