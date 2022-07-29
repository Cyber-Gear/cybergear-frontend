import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import i18n from "../i18n/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLanguage: i18n.locale,
    showApprovePopup: false,
    showWalletListPopup: false,
    showWalletConnectPopup: false,
    walletAccount: "",
  },
  getters: {
    isEnLang(state) {
      return state.currentLanguage == "en";
    },
    getApprovePopup(state) {
      return state.showApprovePopup;
    },
    getWalletListPopup(state) {
      return state.showWalletListPopup;
    },
    getWalletConnectPopup(state) {
      return state.showWalletConnectPopup;
    },
    getWalletAccount(state) {
      return state.walletAccount;
    },
  },
  mutations: {
    setApprovePopup(state, data) {
      state.showApprovePopup = data;
    },
    setWalletListPopup(state, data) {
      state.showWalletListPopup = data;
    },
    setWalletConnectPopup(state, data) {
      state.showWalletConnectPopup = data;
    },
    setWalletAccount(state, data) {
      state.walletAccount = data;
    },
  },
  actions: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      reducer(val) {
        return {
          walletAccount: val.walletAccount,
        };
      },
    }),
  ],
});
