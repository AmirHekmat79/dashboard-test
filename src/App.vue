<template>
  <v-app>
    <v-app-bar color="gray darken-3" class="flex-grow-0" app dark>
      <div class="icons">
        <v-icon class="light-blue-text darken-4">mdi-login</v-icon>
        <v-icon class="cyan--text accent-3 darken-4 mx-4">mdi-account</v-icon>
        <v-icon class="yellow--text accent-2">mdi-bell-ring</v-icon>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="display-1">قاصدک</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer dark right app v-model="drawer" bottom>
      <v-list-item>
        <v-list-item-content class="text-center">
          <v-list-item-title class="display-1"> داشبورد</v-list-item-title>
          <v-list-item-subtitle class="text-h5 gray--text darken-4"
            ><v-icon>mdi-view-dashboard</v-icon></v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav class="text-right">
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              ><span class="text-h6">{{ item.title }}</span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
// import DashboardPannel from "./components/DashboardPannel.vue";
export default {
  name: "App",
  data: () => ({
    drawer: false,
    // items: [
    //   { title: "Dashboard", icon: "mdi-view-dashboard" },
    //   { title: "Account", icon: "mdi-account-box" },
    //   { title: "Settings", icon: "mdi-cog" },
    // ],
    items: [
      { title: "مدیریت کاربران", icon: "mdi-menu-down" },
      { title: "مدیریت سامانه", icon: "mdi-menu-down" },
      { title: "امنیت", icon: "mdi-menu-down" },
      { title: "گواهی ها", icon: "mdi-menu-down" },
      { title: "سامانه احراز ", icon: "mdi-menu-down" },
      { title: "گزارشات", icon: "mdi-menu-down" },
      { title: "مدیریت توکن", icon: "mdi-menu-down" },
      { title: "جمع آوری داده", icon: "mdi-menu-down" },
      { title: "پایگاه دانش", icon: "mdi-menu-down" },
    ],
    showSidebar: true,
  }),
  // components: {
  //   DashboardPannel,
  // },
};
</script>
