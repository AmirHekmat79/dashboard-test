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
          :input-value="lang"
          :label="lang.toUpperCase()"
          false-value="en"
          true-value="fa"
          @change="onChangeLocale"
        ></v-switch>
        <span><v-icon>mdi-login</v-icon></span>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      flat
      :right="this.$vuetify.rtl"
      app
      v-model="drawer"
      bottom
    >
      <v-list-item>
        <v-list-item-content class="text-center">
          <v-list-item-subtitle class="text-h5 gray--text darken-4">
            <v-icon
              @click="themeHandler"
              :color="this.isDarkTheme ? 'yellow' : 'secondary'"
            >
              {{ iconTheme }}
            </v-icon>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav class="text-center">
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title @click="navigatePages(item.title)"
              ><div class="text-h6">
                {{ $t(item.title) }}
              </div></v-list-item-title
            >
          </v-list-item-content>
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
    items: [
      { title: 'dashboard' },
      { title: 'user' },
      { title: 'licenses' },
      { title: 'project' },
      { title: 'customer' },
    ],
  }),
  methods: {
    onChangeLocale(value) {
      // store selected lang in vuex
      this.$store.commit('setLang', value);
      this.$i18n.locale = value;
      this.$vuetify.lang.current = value;
      this.$vuetify.rtl = value === 'fa';
      sessionStorage.setItem('lang', value);
    },

    navigatePages(title) {
      if (title === 'مشتری' || title === 'customer') {
        this.$router.push('/Customers');
      } else if (title === 'کاربر' || title === 'user') {
        this.$router.push('/Users');
      } else if (title === 'لایسنس ها' || title === 'licenses') {
        this.$router.push('/Licenses');
      } else if (title === 'داشبورد' || title === 'dashboard') {
        this.$router.push('/');
      } else {
        this.$router.push('/Projects');
      }
    },

    themeHandler() {
      // change vuetify theme
      this.$vuetify.theme.dark = !this.isDarkTheme;

      // store selected theme in vuex and session storage
      sessionStorage.setItem('isDark', !this.isDarkTheme);
      this.$store.commit('setIsDarkTheme', !this.isDarkTheme);
    },
  },

  computed: {
    iconTheme() {
      return this.isDarkTheme ? 'mdi-white-balance-sunny' : 'mdi-weather-night';
    },

    lang() {
      return this.$store.state.lang;
    },

    isDarkTheme() {
      return this.$store.state.isDarkTheme;
    },
  },
};
</script>
<style scoped>
.v-icon {
  transition: all 0.4s;
}
.icons {
  margin-top: 22px;
}

.navigationFontSize {
  font-size: 20px;
}
</style>
