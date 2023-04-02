import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import './assets/css/fonts.css';
import './assets/css/global.css';
import store from './store';
import i18n from '@/plugins/i18n';

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
