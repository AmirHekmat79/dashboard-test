import Vue from 'vue';
import Vuex from 'vuex';

// import i18n from '@/plugins/i18n';
Vue.use(Vuex);
export default new Vuex.Store({
  namespaced: true,
  state: {
    darkTheme: false,
    language: {
      current: { name: 'fa' },
      available: [{ name: 'fa' }, { name: 'en' }],
    },
  },
  getters: {
    getTheme: (state) => state.darkTheme,
    getLang: (state) => state.language,
  },
  actions: {
    // setThemeSession(context) {
    //   context.commit('setThemeSession');
    // },
    darkTheme({ commit }, darkTheme) {
      commit('darkTheme', darkTheme);
    },
    language({ commit }, language) {
      commit('language', language);
    },
   
  },
  mutations: {
    // setThemeSession(state, theme) {
    //   state.darkTheme = theme;
    //   sessionStorage.setItem('setDark', theme);
    // },
    // setLangSession(state, lang) {
    //   state.lang = lang;
    //   sessionStorage.setItem('setLang', lang);
    // },
    SetDarkTheme(state, darkTheme) {
      state.darkTheme = darkTheme;
    },
    setLanguage(state, language) {
      state.language.current = language;
    },
  },
});
