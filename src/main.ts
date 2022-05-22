import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "./styles/reset.scss";
import "./styles/global.scss";

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

import utils from "./utils";
Vue.prototype.$utils = utils;
import toast from "./components/toast";
Vue.prototype.$toast = toast;

const production = process.env.NODE_ENV === "production";
const aws = production ? "https://cdn.isekai.fans/cybergear_assets_main" : "https://cdn.isekai.fans/cybergear_assets_test";
Vue.prototype.$urlImages = aws + "/images/";
Vue.prototype.$urlVideos = aws + "/videos/";
Vue.prototype.$urlFonts = aws + "/fonts/";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
