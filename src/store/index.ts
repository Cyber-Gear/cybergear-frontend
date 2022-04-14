import Vue from "vue";
import Vuex from "vuex";
import i18n from "../i18n/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {
    isEnLang() {
      return i18n.locale == "en";
    },
  },
  mutations: {},
  actions: {},
});
