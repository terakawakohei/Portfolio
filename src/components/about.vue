<template>
  <v-container py-10>
    <!-- <v-overlay absolute> -->
    <v-layout column align-center justify-center>
      <h1 class="display-2 font-weight-black">About</h1>
    </v-layout>
    <v-layout mt-3 px-5 class="text-xs-center top" row wrap>
      <v-flex xs12>
        <v-avatar size="250" color="grey lighten-4">
          <img src="../assets/IMG_0676.jpeg" alt="avatar" />
        </v-avatar>
        <p class="title font-weight-thin mt-12">
          情報系の学科に通う大学生です。イラスト描くのが趣味です
        </p>
      </v-flex>
    </v-layout>

    <!-- </v-overlay> -->
  </v-container>
</template>

<script>
export default {
  name: 'about',
};
</script>
<style>
.top {
  margin-top: 60%;
}
</style>
