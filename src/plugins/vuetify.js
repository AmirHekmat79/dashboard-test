import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi" || "md" || "fa" || "fa4",
  },
  rtl: true,
  breakpoint: {
    mobileBreakpoint: 'sm' 
  },
});
