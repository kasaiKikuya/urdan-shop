import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// swipper
import "swiper/css/swiper.css";

// css page
// import "@/assets/css/vendor/bootstrap.min.css";
import "@/assets/css/vendor/pe-icon-7-stroke.css";
import "@/assets/css/vendor/themify-icons.css";
import "@/assets/css/vendor/font-awesome.min.css";
import "@/assets/css/plugins/animate.css";
import "@/assets/css/plugins/aos.css";
import "@/assets/css/plugins/magnific-popup.css";
// import "@/assets/css/plugins/swiper.min.css";
// import "@/assets/css/plugins/jquery-ui.css";
import "@/assets/css/plugins/nice-select.css";
import "@/assets/css/plugins/select2.min.css";
import "@/assets/css/plugins/easyzoom.css";
import "@/assets/css/plugins/slinky.css";
import "@/assets/css/style.css";
//Admin page
import "@/assets/css/slidebars.min.css";
import "@/assets/css/icons.css";
import "@/assets/css/menu.css";
import "@/assets/css/style2.css";


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
