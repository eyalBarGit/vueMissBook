<template>
  <div class="text-center user-message">
    <v-chip x-large v-if="chip3" class="ma-4" close color="green" outlined @click:close="chip3 = !chip3">
      Success
    </v-chip>
  </div>
</template>
<script>
export default {
  name: "userMessage",
  data() {
    return {
      chip3: true,
    };
  },
  props: {},
  mounted(){
    let self = this
    setTimeout(()=>{
      self.$store.dispatch('updateSnackBarStatus',false)
    },3000)
  }
};
</script>
<style lang="scss">
.user-message {
  position: absolute;
  top: 0;
  right: 10px;
}
</style>
