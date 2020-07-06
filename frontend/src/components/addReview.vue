<template>
  <form method="POST" :action="bookIdKey" @submit.prevent class="d-flex flex-column">
    <v-rating v-model="review.stars"></v-rating>
    <input v-model="review.name" type="text" placeholder="Your-name" />
    <textarea v-model="review.txt" type="text" placeholder="Enter your review" />
    <v-btn @click.prevent="addReview">Save</v-btn>
  </form>
</template>
<script>
export default {
  name: "add-review",
  data() {
    return {
      review: {
        name: "",
        date: this.getFullDate(),
        stars: null,
        txt: "",
        bookId: ""
      }
    };
  },
  methods: {
    addReview() {
      if (!this.review.name) this.review.name = "BookReader";
      this.$emit("addReview", this.review);
    },
    getFullDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();

      return (today = mm + "/" + dd + "/" + yyyy);
    }
  },
  props: {
    bookIdKey: {
      type: String,
      required: true
    }
  },
  created() {
    // console.log('this props bookId: ',this.bookIdKey)
    this.review.bookId = this.bookIdKey;
  }
};
</script>
<style lang="scss"></style>
