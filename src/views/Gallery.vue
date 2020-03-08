<template>
  <div>
    <Header />

    <h1 class="display-2 font-weight-black padding">
      works
    </h1>

    <v-gallery :images="original"></v-gallery>

    <h1 class="display-2 font-weight-black padding">Fanart</h1>

    <v-gallery :images="fanart"></v-gallery>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/header.vue';

export default {
  name: 'home',
  data: function() {
    return {
      imageurl: require('@/assets/Orhh.jpg'),

      original: [
        {
          title: '　',
          url: require('../assets/original/netu.png'),
        },
        {
          title: '　',
          url: require('../assets/original/おっっさn.png'),
        },
        {
          title: '　',
          url: require('../assets/original/A3vaporwave.jpg'),
        },
        {
          title: '　',
          url: require('../assets/original/植物.jpg'),
        },
        {
          title: '　',
          url: require('../assets/original/秋.jpg'),
        },
        {
          title: '　',
          url: require('../assets/original/大樹kanse.jpg'),
        },
        {
          title: '　',
          url: require('../assets/original/arm.jpg'),
        },
        {
          title: '　',
          url: require('../assets/original/かさ.jpg'),
        },
        {
          title: '　',
          url: require('../assets/original/Valentain.jpg'),
        },
        {
          title: '　',
          url: require('../assets/original/青空.jpg'),
        },
        {
          title: '　',
          url: require('../assets/original/泣き顔.jpg'),
        },
        {
          title: '　',
          url: require('../assets/original/Or.jpg'),
        },
      ],
      fanart: [
        {
          title: '　',
          url: require('../assets/fanart/Sinnoi.jpg'),
        },
        {
          title: '　',
          url: require('../assets/fanart/Sinnoimsk.jpg'),
        },
        {
          title: '　',
          url: require('../assets/fanart/akirar.jpg'),
        },
        {
          title: '　',
          url: require('../assets/fanart/asherad.jpg'),
        },
        {
          title: '　',
          url: require('../assets/fanart/りあむ.jpg'),
        },
        {
          title: '　',
          url: require('../assets/fanart/akira.png'),
        },
        {
          title: '　',
          url: require('../assets/fanart/saitoukannsei.jpg'),
        },
      ],
    };
  },

  components: {
    Header,
  },
  mounted() {
    for (var i = 0; i < this.works.length; i++) {
      this.lists.title = i;
      this.lists.url = require(this.works[i]);
      console.log(this.lists);
    }
  },
};
</script>
<style>
.padding {
  margin-bottom: 90px;
  margin-top: 90px;
}
</style>
