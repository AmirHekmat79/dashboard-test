<template>
  <div>
    <v-app-bar
      :elevation="this.$vuetify.theme.dark ? 2 : 6"
      class="flex-grow-0"
      flat
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <div>سامانه مدیریت گواهی</div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="icons">
        <v-icon>mdi-login</v-icon>
      </div>
    </v-app-bar>
    <v-navigation-drawer flat right app v-model="drawer" bottom>
      <v-list-item>
        <v-list-item-content class="text-center">
          <v-list-item-subtitle class="text-h5 gray--text darken-4"
            ><v-icon
              @click="themeHandler()"
              :color="this.$vuetify.theme.dark ? 'yellow' : 'secondary'"
            >
              {{ iconTheme }}
            </v-icon></v-list-item-subtitle
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
    iconTheme: 'mdi-white-balance-sunny',
    // items: [
    //   { title: "Dashboard", icon: "mdi-view-dashboard" },
    //   { title: "Account", icon: "mdi-account-box" },
    //   { title: "Settings", icon: "mdi-cog"  },

    //  /mdi - white - balance - sunny
    ///mdi - weather - night//
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
    themeHandler() {
      if (this.$vuetify.theme.dark == false) {
        this.iconTheme = 'mdi-white-balance-sunny';
        this.$vuetify.theme.dark = true;
      } else {
        this.iconTheme = 'mdi-weather-night';
        this.$vuetify.theme.dark = false;
      }
    },
  },

  // watch: {
  //   theme(value) {
  //     // this.$emit('displayTheme', value);
  //     this.$emit('displayTheme', value);
  //     console.log(value)
  //   },
  // },
};
</script>
<style scoped>
/* @import url('../assets/Fonts/Sans\ a4fran3.ttf'); */
.v-icon {
  transition: all 0.4s;
}
</style>
