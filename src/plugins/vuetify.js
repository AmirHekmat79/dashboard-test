import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import fa from 'vuetify/es5/locale/fa';
import VueI18n from 'vue-i18n';
import i18n from './i18n';
Vue.use(Vuetify);
Vue.use(VueI18n);

export default new Vuetify({
  // lang: {
  //   locales: { fa },
  //   current: 'fa',
  // },
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  icons: {
    iconfont: 'mdi' || 'md' || 'fa' || 'fa4',
  },
  rtl: true,
  breakpoint: {
    mobileBreakpoint: 'sm',
  },
  // defaultassets: {
  //   font: false,
  // },
  theme: {
    defaultTheme: 'dark',
    dark: {
      primary: '#2980b9',
    },
    light: {
      primary: '#ffffff',
    },
  },
});
