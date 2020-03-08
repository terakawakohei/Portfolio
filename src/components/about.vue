<template>
  <v-container py-10>
    <!-- <v-overlay absolute> -->
    <v-layout column align-center justify-center>
      <h1 class="display-2 font-weight-black">About</h1>
    </v-layout>
    <v-layout mt-3 px-5 class="text-xs-center top mt-12" row wrap>
      <v-flex xs12>
        <v-avatar size="250" color="grey lighten-4">
          <img src="../assets/IMG_0676.jpeg" alt="avatar" />
        </v-avatar>
        <p class="title font-weight-bold mt-12 mb-7">
          A university student,majoring in system engineering
        </p>
        <p class="headline font-weight-bold mt-9">
          Hobby
        </p>
        <p class="title font-weight-medium mt-3">
          drawing,painting,modeling
        </p>

        <p class="headline font-weight-bold mt-12">
          Tools
        </p>
        <p class="title font-weight-medium mt-3">
          - photoshop
        </p>
        <p class="title font-weight-medium mt-3">
          - procriate
        </p>
        <p class="title font-weight-medium mt-3">
          - blender
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
