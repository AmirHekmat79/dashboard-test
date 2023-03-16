<template>
  <div>
    <v-app-bar color="grey darken-2" class="flex-grow-0" flat app dark>
      <v-app-bar-nav-icon
        class="white--text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="white--text text-h5"
        >سامانه مدیریت گواهی
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="icons">
        <v-icon class="white--text darken-4">mdi-login</v-icon>
      </div>
    </v-app-bar>
    <v-navigation-drawer flat dark right app v-model="drawer" bottom>
      <v-list-item>
        <v-list-item-content class="text-center">
          <v-list-item-subtitle class="text-h5 gray--text darken-4"
            ><v-icon>mdi-view-dashboard</v-icon></v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav class="text-right">
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title @click="navigatePages(item.title)"
              ><span class="text-h6">{{ item.title }}</span></v-list-item-title
            >
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data: () => ({
    drawer: false,
    // items: [
    //   { title: "Dashboard", icon: "mdi-view-dashboard" },
    //   { title: "Account", icon: "mdi-account-box" },
    //   { title: "Settings", icon: "mdi-cog" },
    // ],
    items: [
      { title: 'داشبورد', icon: 'mdi-menu-down' },
      { title: 'کاربر', icon: 'mdi-menu-down' },
      { title: 'لایسنس ها', icon: 'mdi-menu-down' },
      { title: 'پروژه', icon: 'mdi-menu-down' },
      { title: 'مشتری', icon: 'mdi-menu-down' },
    ],
  }),
  methods: {
    navigatePages(title) {
      console.log(title);
      if (title == 'مشتری') {
        this.$router.push('Customers');
      } else if (title == 'کاربر') {
        this.$router.push('Users');
      } else if (title == 'لایسنس ها') {
        this.$router.push('Licenses');
      } else if (title == 'داشبورد') {
        this.$router.push('/');
      } else {
        this.$router.push('Projects');
      }
    },
  },
};
</script>
<style scoped></style>
