<template>
  <div class="home">
    <img class="imgsize" alt="Vue logo" src="../assets/netu.png" />
    <HelloWorld msg="Welcome to My Portfolio!!" />
    <ShowImage
      firstIMG="mi-ha-.png"
      secondIMG="riamu.jpg"
      thirdIMG="free.png"
    />
    <ul>
      <li v-for="user in users" v-bind:key="user.name">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ShowImage from '@/components/ShowImage.vue';

export default {
  name: 'home',
  data: function() {
    return {
      users: [],
    };
  },

  components: {
    HelloWorld,
    ShowImage,
  },
  mounted: function() {
    axios
      .get('https://jsonplaceholder.typicode.com/users', {
        params: {
          name: 'Glenna Reichert',
        },
      })
      .then(response => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
        console.log(response.statusText);
        console.log(response.config);
      })
      .catch(response => console.log(response));
  },
};
</script>
<style>
.imgsize {
  width: 30%; /* 横幅を割合で指定 */
  height: auto;
}
</style>
