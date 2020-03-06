<template>
  <v-app-bar fixed dense>
    <v-bottom-navigation>
      <v-btn to="/">
        <span>Top</span>
        <v-icon>fas fa-eject</v-icon>
      </v-btn>

      <v-btn to="about">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn to="/gallery">
        <span>Gallery</span>
        <v-icon>fas fa-paint-brush</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app-bar>
</template>

<script>
// @ is an alias to /src
// import Home from '@/views/Home.vue';
// import About from '@/views/About.vue';
// import Gallery from '@/views/Gallery.vue';

export default {
  name: 'header',
  data: function() {
    return {};
  },
};
</script>

<style></style>
