<template>
  <div>
    <Header />
    <ShowImage
      firstIMG="mi-ha-.png"
      secondIMG="riamu.jpg"
      thirdIMG="free.png"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import ShowImage from '@/components/ShowImage.vue';
import Header from '@/components/header.vue';

export default {
  name: 'home',
  data: function() {
    return {
      users: [],
    };
  },

  components: {
    ShowImage,
    Header,
  },
};
</script>
<style>
.imgsize {
  width: 30%; /* 横幅を割合で指定 */
  height: auto;
}
</style>
