<template>
  <div class>
    <div class="bookList d-flex flex-wrap">
      <bookPreview
        class="mb-5"
        v-for="(book, index) in books"
        :key="index"
        :book="book"
        @click.native="selectBook(book.id)"
        @onDeleteBook="deleteBook(book)"
      ></bookPreview>
    </div>
  </div>
</template>
<script>
import bookPreview from "./bookPreview.vue";
export default {
  name: "bookList",
  data() {
    return {};
  },
  components: {
    bookPreview
  },

  methods: {
    selectBook(bookId) {
      this.$emit("selected", bookId);
    },
    deleteBook(book) {
      this.$emit("removed", book);
    }
  },
  computed: {
    books() {
      const books = this.$store.getters.getBooks;
      return books;
    }
  }
};
</script>
<style lang="scss">
.bookList {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
