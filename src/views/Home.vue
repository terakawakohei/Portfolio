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
            <v-layout column align-center justify-start>
              <h1 class="display-3 font-weight-black bottom">
                Welcome to my portfoliio!!
              </h1>
            </v-layout>
            <About class="margin" />
            <Link lass="margin" />
          </v-overlay>
        </v-parallax>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue';
import About from '@/components/about.vue';
import Link from '@/components/link.vue';
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
    Link,
  },
};
</script>
<style>
.bottom {
  margin-bottom: 200%;
}
.margin {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
