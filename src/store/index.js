import Vue from "vue";
import Vuex from "vuex";

// import i18n from '@/plugins/i18n';
Vue.use(Vuex);
export default new Vuex.Store({
  namespaced: true,

  state: {
    isDarkTheme: false,
    lang: "fa",
  },

  mutations: {
    setLang(state, payload) {
      state.lang = payload;
    },

    setIsDarkTheme(state, payload) {
      state.isDarkTheme = payload;
    },
  },
});
