import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import fa from "vuetify/es5/locale/fa";
Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { fa },
    current: "fa",
  },
  icons: {
    iconfont: "mdi" || "md" || "fa" || "fa4",
  },
  rtl: true,
  breakpoint: {
    mobileBreakpoint: "sm",
  },
  // defaultassets: {
  //   font: false,
  // },
  theme: {
    defaultTheme: "dark",
    dark: {
      primary: "#2980b9",
    },
    light: {
      primary: "#ffffff",
    },
  },
});
