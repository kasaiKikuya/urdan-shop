import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import VueAwesomeSwiper from 'vue-awesome-swiper'

// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// swipper
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
