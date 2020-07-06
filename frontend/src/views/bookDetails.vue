<template>
  <p v-if="!book">loading...</p>
  <div v-else class="bookDetails d-flex flex-column align-center justify-space-around">
    <v-card class="mx-auto my-12" max-width="800" width="100%">
      <v-img height="300" :src="book.thumbnail">
        <v-chip v-if="book.listPrice.isOnSale" class="ma-4" color="red" text-color="white">
          <v-avatar left>
            <v-icon>mdi-sale</v-icon>
          </v-avatar>
          <span class="font-weight-bold subtitle-1">On Sale!</span>
        </v-chip>
      </v-img>
      <v-card-title>
        {{ book.title.toUpperCase() }}
        <v-spacer></v-spacer>
        <div v-if="checkNan()">{{ bookAge }}</div>
      </v-card-title>
      <v-card-subtitle v-if="book.authors">
        <span class="font-weight-bold">Authors:</span>
        {{ book.authors.join(" ") }}
        <div v-if="book.categories">
          <span class="font-weight-bold">Categories:</span>
          {{ book.categories.join(" ") }}
        </div>
      </v-card-subtitle>
      <v-card-text v-if="book.description">
        <span class="font-weight-bold">Description:</span>
        <long-text :txt="book.description"></long-text>
        <div>
          <span class="font-weight-bold">Language:</span>
          {{ book.language }}
        </div>
      </v-card-text>

      <v-card-actions>
        <span>{{ readStatus }}</span>
        <v-spacer></v-spacer>
        <span class="font-weight-bold">Price:</span>
        <span
          class="font-weight-bold"
          :class="{
            redColor: book.listPrice.amount > 150,
            greenColor: book.listPrice.amount < 20,
          }"
        >{{ book.listPrice.amount }}</span>
      </v-card-actions>
    </v-card>
    <div class="reviews-container">
      <div class="add-review-container d-flex justify-center">
        <div>
          <v-btn @click="showReview = !showReview">Add-Review</v-btn>
        </div>
        <addReview :bookIdKey="book.id" @addReview="addReview" v-if="showReview"></addReview>
      </div>
      <div v-if="book.reviews">
        <div
          class="review-card d-flex justify-space-between"
          :key="idx"
          v-for="(review, idx) in book.reviews"
        >
          <div class="d-flex flex-column">
            <div class="name-date d-flex justify-space-between">
              <div class="d-flex">
                <p class="bold">name:</p>
                <p>{{ review.name }}</p>
              </div>
              <div class="d-flex">
                <p class="bold">date:</p>
                <p>{{ review.date }}</p>
              </div>
            </div>
            <div class="d-flex">
              <p class="bold">review:</p>
              <p>{{ review.txt }}</p>
            </div>
          </div>
          <div class="div">
            <v-btn @click="removeReview(review)">X</v-btn>
          </div>
        </div>
      </div>
    </div>
    <v-btn @click="goToNextBook">Next-Book</v-btn>
  </div>
</template>
<script>
import longText from "../components/longText";
import addReview from "../components/addReview";
import bookService from "../services/bookService.js";
export default {
  name: "bookDetails",
  data() {
    return {
      book: null,
      showReview: false,
      // reviews: [],
      nextBook: false
    };
  },
  components: {
    longText,
    addReview
  },
  methods: {
    async addReview(review) {
      this.setNotificationActive();
      await bookService.addReview(review);
      this.showReview = false;
      this.updateBook();
    },
    async removeReview(review) {
      this.setNotificationActive();
      await bookService.removeReview(review);
      this.updateBook();
    },
    async updateBook() {
      let bookId = this.$route.params.id;
      const currBook = await bookService.getById(bookId);
      this.book = currBook;
      this.$store.dispatch("updateCurrBook", this.book);
    },
    setNotificationActive() {
      this.$store.dispatch("updateSnackBarStatus", true);
    },
    checkNan() {
      return isNaN(this.book.publishedDate) ? false : true;
    },
      goToNextBook() {
      this.$router.push({
        name: "bookDetails",
        params: {
          id: this.$store.getters.getNextBook
        }
      });
    }
  },
  watch: {
    "$route.params.id"(newVal, oldVal) {
      console.log("newVal", newVal);
      console.log("oldVal", oldVal);
      let bookId = this.$route.params.id;
      bookService.getById(bookId).then(book => {
        this.book = book;
      });
    }
  },
  computed: {
    readStatus() {
      let pageCount = this.book.pageCount;
      if (pageCount > 500) {
        return "Long reading";
      }
      if (pageCount > 200) {
        return "Decent Reading";
      }
      if (pageCount < 100) {
        return "Light Reading";
      }
      return "Medium Reading";
    },
    bookAge() {
      let bookAge = this.book.publishedDate;
      let currYear = new Date().getFullYear();
      let yearsDifference = currYear - bookAge;
      if (yearsDifference > 10) return "Veteran";
      if (yearsDifference < 1) return "New";
      return yearsDifference + " years ago";
    }
  },
  mounted() {},
  async created() {
    this.updateBook();
  }
};
</script>
<style lang="scss">
.bold {
  font-weight: 700;
}
.reviews-container {
  width: 500px;
  .add-review-container {
    width: 100%;
    margin-bottom: 20px;
  }
}

.review-card {
  margin: 15px 0;
  width: 500px;
  padding: 20px;
  background-color: lightgray;
  .name-date {
    width: 400px;
    border-bottom: 1px solid rgb(255, 255, 255);
    padding-right: 20px;
  }
}
.greenColor {
  color: green;
}
.redColor {
  color: red;
}
</style>
