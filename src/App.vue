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
};
</script>

<!-- <style>
body {
  background-color: #4e4a4a;
}
</style> -->
