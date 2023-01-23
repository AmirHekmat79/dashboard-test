import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import routes from './router/index.js'
// import LoginForm from "./components/LoginForm.vue";
Vue.config.productionTip = false;

Vue.use(vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
