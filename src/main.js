import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "./assets/css/fonts.css";
import "./assets/css/global.css";

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
