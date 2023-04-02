<template>
  <v-app>
    <NavigationBar v-if="!$route.meta.hideNavbar" />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import DashboardPannel from "./components/DashboardPannel.vue";
import NavigationBar from "./components/NavigationBar.vue";
export default {
  name: "App",
  props: {
    source: String,
  },
  data: () => ({
    // items: [
    //   { title: "Dashboard", icon: "mdi-view-dashboard" },
    //   { title: "Account", icon: "mdi-account-box" },
    //   { title: "Settings", icon: "mdi-cog" },
    // ],
  }),
  components: {
    NavigationBar,
  },

  mounted() {
    // initially set language
    const selectedLocale = sessionStorage.getItem("lang");

    this.$i18n.locale = selectedLocale;
    this.$vuetify.lang.current = selectedLocale;
    this.$vuetify.rtl = selectedLocale === "fa";
    sessionStorage.setItem("lang", selectedLocale);

    // store selected lang in vuex
    this.$store.commit("setLang", selectedLocale);
  },
};
</script>

<style>
/* .v-application {
 background-color: #bdbdbd !important; 
} */
</style>
