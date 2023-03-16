import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import HighchartsVue from 'highcharts-vue';

// import LoginForm from "./components/LoginForm.vue";
Vue.config.productionTip = false;
Vue.use(HighchartsVue);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
