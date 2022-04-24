import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "./style/reset.scss";
import "./style/global.scss";

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

import utils from "./utils";
Vue.prototype.$utils = utils;
import toast from "./components/toast";
Vue.prototype.$toast = toast;

Vue.prototype.$urlImages = process.env.VUE_APP_IMAGE;
Vue.prototype.$urlVideos = process.env.VUE_APP_VIDEO;
Vue.prototype.$urlTypefaces = process.env.VUE_APP_TYPEFACE;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
