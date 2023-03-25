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
        <div>{{ $t('dashboarMainTitle') }}</div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="icons d-flex justify-center items-center">
        <v-switch
          class="mx-5"
          v-model="switch1"
          :label="`${switch1 ? 'En' : 'Fa'}`"
          @toggle="switch1 = !switch1"
        ></v-switch>
        <span><v-icon>mdi-login</v-icon></span>
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
              ><span class="text-h6">{{
                $t(item.title)
              }}</span></v-list-item-title
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
import i18n from '@/plugins/i18n';
// const elems = document.getElementsByTagName('*');
export default {
  name: 'NavigationBar',
  data: () => ({
    switch1: true,
    locale: 'En',
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
      { title: 'dashboard', icon: 'mdi-menu-down' },
      { title: 'user', icon: 'mdi-menu-down' },
      { title: 'licenses', icon: 'mdi-menu-down' },
      { title: 'project', icon: 'mdi-menu-down' },
      { title: 'customer', icon: 'mdi-menu-down' },
    ],
  }),
  methods: {
    navigatePages(title) {
      console.log(title);
      if (title == 'مشتری' || title == 'customer') {
        this.$router.push('Customers');
      } else if (title == 'کاربر' || title == 'user') {
        this.$router.push('Users');
      } else if (title == 'لایسنس ها' || title == 'licenses') {
        this.$router.push('Licenses');
      } else if (title == 'داشبورد' || title == 'dashboard') {
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

    // changeLocale(switch1) {
    //   if (switch1) {
    //     this.switch1 = false;
    //   } else {
    //     this.switch1 = true;
    //   }
    // },
  },

  watch: {
    switch1(value) {
      if (value) {
        i18n.locale = 'En';
        // for (let elem of elems) {
        //   elem.style.direction = 'ltr';
        // }
        this.$vuetify.framework.lang.current = i18n.locale;
      } else {
        i18n.locale = 'fa';
        // for (let elem of elems) {
        //   elem.style.direction = 'rtl';
        // }
        this.$vuetify.framework.lang.current = i18n.locale;
      }
    },
  },
};
</script>
<style scoped>
/* @import url('../assets/Fonts/Sans\ a4fran3.ttf'); */
.v-icon {
  transition: all 0.4s;
}
.icons {
  margin-top: 22px;
}
</style>
