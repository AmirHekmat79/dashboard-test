import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import './assets/css/fonts.css';
import './assets/css/global.css';
import i18n from '@/plugins/i18n';
// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n);
// const locales= {
//   en: {
//     user: {
//       mail: "email address"
//     }
//   },
//   fa: {
//     user: {
//       mail: "ایمیل"
//     }
//   }
// }
// const i18n = new VueI18n({
//   locale: 'fa',
//   fallbackLocale: 'en',
//   messages: locales
// })
new Vue({
  vuetify,
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
