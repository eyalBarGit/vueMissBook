<template>
    <v-app-bar app fixed color="deep-purple accent-4">
      <v-spacer></v-spacer>
      <router-link to="/" class="links">
        <v-toolbar-title class="white--text">Home</v-toolbar-title>
      </router-link>
      <v-divider class="mx-5" color="white" vertical></v-divider>
      <router-link to="/book" class="links">
        <v-toolbar-title class="white--text">Books</v-toolbar-title>
      </router-link>
      <v-divider class="mx-5" color="white" vertical></v-divider>
      <v-spacer></v-spacer>
    </v-app-bar>
</template>
<style lang="scss">
.links{
  text-decoration: none;
  text-transform: none;
}
</style>