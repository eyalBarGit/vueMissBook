<template>
  <div class="home d-flex flex-column">
    <div class="main-container d-flex ">
      <div class="details"></div>
      <bookHomePage :books="books"></bookHomePage>
    </div>
    <div class="triangle-bottomright"></div>
  </div>
</template>
<script>
import bookHomePage from "../components/bookHomePage";
import bookService from "../services/bookService.js";
export default {
  name: "Home",
  data() {
    return {
      books: null,
    };
  },
  components: {
    bookHomePage,
  },
  props: {},
  created() {
    this.books = bookService.books;
    
  },
};
</script>
<style lang="scss">
.main-container {
//test
  padding-top: 150px;
  max-width: 1440px;
  margin: 0 auto;
  z-index: 2;
  .details {
    margin-inline-end: 50px;
  }
  .description {
    p {
      margin: 0;
    }
  }
}
a {
  text-decoration: none;
}
.triangle-bottomright {
  position: absolute;
  z-index: 0;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 800px solid #6200ea;
  border-left: 800px solid transparent;
}
</style>
