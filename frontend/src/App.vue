<template>
  <v-app>
    <navBar></navBar>
    <v-main>
      <userMessage v-if="isSnackBarShown" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import userMessage from "./components/userMessage";

import navBar from "./globalLayouts/navBar.vue";
export default {
  name: "App",
  components: {
    navBar,
    userMessage,
  },
  computed:{
    isSnackBarShown(){
      return (this.$store.getters.getSnackBarStatus)
    }
  }
};
</script>
