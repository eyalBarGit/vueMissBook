<template>
  <div class="add-book d-flex justify-center">
    <div class="search-input">
      <input
        v-model="searchBy"
        @input="getGoogleBooks(searchBy)"
        type="text"
        placeholder="Search a book"
      />
    </div>
    <div class="books-container">
      <div class="book-list" v-for="(book, idx) in books" :key="idx">
        <ul>
          <li class="book-list-details d-flex justify-space-between">
            <div class="book-title">{{ book.volumeInfo.title }}</div>
            <v-btn @click="onAddBook(book)" small>+</v-btn>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import addBookService from "../services/add.book.service.js";
// import bookService from "../services/bookService";
export default {
  name: "addBook",
  data() {
    return {
      books: [],
      searchBy: ""
    };
  },
  methods: {
    async getGoogleBooks(searchBy) {
      const googleBook = await addBookService.getGoogleBooksList(searchBy);
      this.books = googleBook;
    },
    async onAddBook(book) {
      this.$emit("addedBook",book);
      this.setNotificationActive();
    },
    setNotificationActive() {
      this.$store.dispatch("updateSnackBarStatus", true);
    }
  },
  mounted() {
    this.getGoogleBooks();
  }
};
</script>
<style lang="scss">
.add-book {
  margin-top: 50px;
  height: fit-content;
  .books-container {
    position: absolute;
    height: fit-content;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.637);
    top: 100px;
    left: 35%;
    .book-list {
      li {
        padding: 5px;
        border-bottom: 1px solid rgb(0, 0, 0);
        font-weight: 400;
        height: 100%;
        color: #fff;
        margin-inline-end: 5px;
      }
      li:hover {
        background-color: rgba(211, 211, 211, 0.664);
        color: black;
        font-weight: 700;
      }
      .book-list-details {
        .book-title {
          max-width: 450px;
        }
      }
    }
  }
}
</style>
