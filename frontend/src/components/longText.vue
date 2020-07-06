<template>
  <div class="description-container">
    <div class="description-text">
      <p>{{ getLength }}</p>
    </div>
    <div>
      <v-btn
        class="length-btn"
        v-if="toggleShowButton()"
        @click="setTextLength"
        color="success"
        >{{ toggleReadbtn() }}</v-btn
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "longText",
  data() {
    return {
      isTextShort: true,
    };
  },
  props: {
    txt: {
      type: String,
      required: true,
    },
  },
  methods: {
    setTextLength() {
      this.isTextShort = !this.isTextShort;
    },
    toggleReadbtn() {
      return this.isTextShort ? "Read More" : "Read Less";
    },
    toggleShowButton() {
      if (this.txt.length > 100) return true;
      return false;
    },
  },
  computed: {
    getLength() {
      let text = this.txt;
      let shortText = text.substr(0, 99);
      if (!this.isTextShort) return text;
      return shortText;
    },
  },
  mounted() {
    this.getLength;
  },
  created() {},
};
</script>
<style lang="scss">
.description-text {
  height: 70px;
}
</style>
