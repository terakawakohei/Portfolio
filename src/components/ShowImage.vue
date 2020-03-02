<template>
  <div class="">
    <div class="parent">
      <img
        class="imgsize"
        alt="イラストが表示されます"
        :src="LoadImg(firstIMG)"
      />
      <img
        class="imgsize"
        alt="イラストが表示されます"
        :src="LoadImg(secondIMG)"
      />

      <img
        class="imgsize"
        alt="イラストが表示されます"
        :src="LoadImg(thirdIMG)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    firstIMG: String,
    secondIMG: String,
    thirdIMG: String,
  },
  methods: {
    LoadImg(name) {
      return require(`../assets/` + name);
    },
  },
  data: function() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imgsize {
  width: 20%; /* 横幅を割合で指定 */
  height: 20%;
}
.parent {
  display: flex;
  justify-content: space-evenly;
}

a {
  color: #42b983;
}
</style>
