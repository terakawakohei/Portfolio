<template>
  <v-app-bar dark fixed>
    <v-container>
      <v-layout row align-center justify-space-around>
        <v-btn to="/">
          <v-layout column>
            <v-icon>fas fa-feather</v-icon>
            <span class="font-weight-medium overline">Bio</span>
          </v-layout>
        </v-btn>

        <v-btn to="/gallery">
          <v-layout column>
            <v-icon>fas fa-paint-brush</v-icon>
            <span class="font-weight-medium overline">Gallery</span>
          </v-layout>
        </v-btn>
      </v-layout>
    </v-container>
  </v-app-bar>
  <!-- <v-bottom-navigation fixed hide-on-scroll>
    <div style="margin-top:10px;">
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
    </div>
  </v-bottom-navigation> -->
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
