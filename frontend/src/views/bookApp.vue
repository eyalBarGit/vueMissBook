<template>
  <div>
    <addBook @addedBook="addBook"></addBook>
    <bookFilter></bookFilter>
    <bookList @selected="selectBook" @removed="removeBook"></bookList>
  </div>
</template>
<script>
import bookFilter from "../components/bookFilter.vue";
import bookList from "../components/bookList.vue";
import addBook from "../components/addBook.vue";

export default {
  name: "bookApp",
  components: {
    bookFilter,
    bookList,
    addBook
  },
  methods: {
    selectBook(bookId) {
      this.$router.push({
        name: "bookDetails",
        params: {
          id: bookId
        }
      });
    },
    async addBook(book) {
      await this.$store.dispatch("addGoogleBook", book);
      this.$store.dispatch("loadBooks");
    },
    async removeBook(bookId) {
      await this.$store.dispatch("removeBook", bookId);
      this.$store.dispatch("loadBooks");
    }
  },
  created() {
    this.$store.dispatch("loadBooks");
  }
};
</script>
<style lang="scss"></style>
