<template>
  <v-container py-10>
    <!-- <v-overlay absolute> -->
    <v-layout column align-center justify-center>
      <h1 class="display-2 font-weight-black">Link</h1>
    </v-layout>
    <v-layout row align-center justify-space-around style="margin-top:70px;">
      <a href="https://twitter.com/P1PH59aZDQsuRjX">
        <v-btn outlined>
          <v-icon>fab fa-twitter</v-icon>
        </v-btn>
      </a>
      <a href="https://github.com/terakawakohei">
        <v-btn outlined>
          <v-icon>fab fa-github</v-icon>
        </v-btn>
      </a>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'link',
};
</script>
