import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import './assets/css/style.css';
Vue.use(Vuetify);

export default new Vuetify({
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
    dark : {
      primary : '#2980b9'
    } ,
    light : {
      primary : '#ffffff'
    }
  },
});
