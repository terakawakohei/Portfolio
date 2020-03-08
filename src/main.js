import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import vGallery from 'v-gallery';
Vue.config.productionTip = false;
Vue.use(vGallery);

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
