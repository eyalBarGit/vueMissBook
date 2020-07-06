<template>
  <div class="book-filter d-flex justify-space-between align-center flex-wrap">
    <!-- <v-input> -->
    <div class="search-line">
      <label for="title">Search Title:</label>
      <input v-model="filterBy.byName" type="text" name="title" placeholder="Title" />
    </div>
    <div class="search-line">
      <label for="from-price">From Price:</label>
      <input v-model="filterBy.fromPrice" name="from-price" type="text" placeholder="0" />
    </div>
    <div class="search-line">
      <label for="to-price">To Price:</label>
      <input v-model="filterBy.toPrice" name="to-price" type="number" placeholder="0" />
    </div>
    <v-btn @click="emitFilter" color="success">Filter</v-btn>
  </div>
</template>
<script>
export default {
  name: "bookFilter",
  data() {
    return {
      filterBy: {
        byName: "",
        fromPrice: "",
        toPrice: ""
      }
    };
  },
  watch: {
    filterBy: {
      deep: true,
      handler(newVal) {
        this.$store.dispatch("updateFilterBy", newVal);
      }
    }
  },
  methods: {
    emitFilter() {
      this.$store.dispatch("updateFilterBy", this.filterBy);
    }
  }
};
</script>
<style lang="scss">
.book-filter {
  background-color: #63baab;
  border-radius: 5px;
  padding: 15px;
  max-width: 1050px;
  margin: 25px auto;
  .search-line label {
    margin-inline-end: 15px;
  }
  .search-line input {
    height: 35px;
    padding-left: 10px;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
  }
}
</style>
