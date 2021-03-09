import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import Swiper from "swiper";
import "swiper/swiper-bundle.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
