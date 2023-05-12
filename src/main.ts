import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import './styles/reset.scss';
import './styles/global.scss';
import './assets/local/iconfonts/iconfont.css';

const isProd = process.env.NODE_ENV == 'production';
Vue.prototype.$isProd = isProd;
const cdn = isProd
  ? '//cdn.crystallabs.games/funtopia/cybergear_assets_main/'
  : '//cdn.crystallabs.games/funtopia/cybergear_assets_test/';

Vue.prototype.$urlNfts = '//cdn.crystallabs.games/funtopia/nfts/';
Vue.prototype.$urlFonts = cdn + 'fonts/';
Vue.prototype.$urlVideos = cdn + 'videos/';
Vue.prototype.$urlImages = cdn + 'images/';
Vue.prototype.$urlArtists = cdn + 'artists/';
Vue.prototype.$urlBlindBoxs = cdn + 'blindboxs/';

import api from './api/api';
Vue.prototype.$api = api;
import utils from './utils/index';
Vue.prototype.$utils = utils;
import filters from './utils/filters';
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

import {
  Icon,
  Button,
  Message,
  Loading,
  Dialog,
  Form,
  FormItem,
  Select,
  Option,
  Input,
  Collapse,
  CollapseItem,
  InputNumber
  // Tooltip,
  // Backtop,
  // Menu,
  // Submenu,
  // MenuItem,
  // MenuItemGroup,
} from 'element-ui';
Vue.use(Icon);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(InputNumber);

// Vue.use(Collapse);
// Vue.use(CollapseItem);
// Vue.use(Tooltip);
// Vue.use(Backtop);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
Vue.prototype.$message = (option: any) => {
  // option.duration = 0;
  // option.offset = 100;
  option.customClass = i18n.locale == 'en' ? 'fontfamily_en' : 'fontfamily_zh';
  // this.$message({ message: this.$t("tips.text12") });
  // this.$message({ message: this.$t("tips.text12"), type: "success" });
  // this.$message({ message: this.$t("tips.text12"), type: "warning" });
  // this.$message({ message: this.$t("tips.text12"), type: "error" });
  return Message(option);
};
Vue.use(Loading); // 使用服务方式的话，只安装Loading即可
Vue.use(Loading.directive); //  指令方式(v-loading)的话这两行都得有

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
