<template>
  <div>
    <Header />

    <!-- <v-parallax dark :src="imageurl" height="100%" alt="top page">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">
          Kazuki Takahashi's Portfolio
        </h1>
      </v-layout>
    </v-parallax> -->
    <v-layout row wrap>
      <v-flex xs12 sm12>
        <v-parallax :src="imageurl" height="3000">
          <v-overlay absolute opacity="0.3">
            <v-layout column align-center justify-center>
              <h1 class="display-3 .font-weight-black">
                Welcome to my portfoliio!!
              </h1>
            </v-layout>
          </v-overlay>
        </v-parallax>
      </v-flex>
    </v-layout>
    <About />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue';
import About from '@/components/about.vue';
export default {
  name: 'home',
  data: function() {
    return {
      imageurl: require('@/assets/Orhh.jpg'),
    };
  },

  components: {
    Header,
    About,
  },
};
</script>
<style>
.imgsize {
  width: 30%; /* 横幅を割合で指定 */
  height: auto;
}
</style>
