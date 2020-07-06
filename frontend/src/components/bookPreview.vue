<template>
  <v-card class="mx-auto text-truncate" max-width="300px">
    <v-img :src="book.thumbnail" width="300px" height="200px"></v-img>

    <v-card-title>{{ book.title.toUpperCase() }}</v-card-title>

    <v-card-subtitle class="text-truncate">{{ book.subtitle }}</v-card-subtitle>

    <v-card-actions class="d-flex justify-space-around">
      <!-- <v-spacer></v-spacer> -->
      <div>
        <v-btn @click.stop="onDeleteBook(book)">Delete</v-btn>
      </div>
      <div>
        <span v-if="book.listPrice">{{ book.listPrice.amount }}</span>
        <span v-else>free</span>
        <span v-if="book.listPrice">{{ book.listPrice.currencyCode }}</span>
        <span v-else>{{ book.currencyCode }}</span>
      </div>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "bookPreview",
  data() {
    return {};
  },
  methods: {
    onDeleteBook(book) {
      this.$emit("onDeleteBook", book);
    }
  },
  props: {
    book: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss"></style>
