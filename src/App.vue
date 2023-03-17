<template>
  <v-app>
    <NavigationBar v-if="!$route.meta.hideNavbar" />
    <v-main style="background-color: #f8f8f8">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import DashboardPannel from "./components/DashboardPannel.vue";
import NavigationBar from './components/NavigationBar.vue';
export default {
  name: 'App',
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
};
</script>

<style>
/* .v-application {
 background-color: #bdbdbd !important; 
} */
@import url('./assets/css/style.css');
.v-application {
  font-family: 'Sans\ a4fran3' !important;
}
</style>
