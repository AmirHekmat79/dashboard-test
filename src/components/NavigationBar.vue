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
          v-model="local"
          :label="`${local ? 'fa' : 'en'}`"
          @toggle="local = !local"
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
import { mapState } from 'vuex';

export default {
  name: 'NavigationBar',
  data: () => ({
    local: true,
    locale: 'fa',
    drawer: false,
    iconTheme: 'mdi-white-balance-sunny',
    items: [
      { title: 'dashboard' },
      { title: 'user' },
      { title: 'licenses' },
      { title: 'project' },
      { title: 'customer' },
    ],
  }),
  methods: {
    navigatePages(title) {
      if (title == 'مشتری' || title == 'customer') {
        this.$router.push('/Customers');
      } else if (title == 'کاربر' || title == 'user') {
        this.$router.push('/Users');
      } else if (title == 'لایسنس ها' || title == 'licenses') {
        this.$router.push('/Licenses');
      } else if (title == 'داشبورد' || title == 'dashboard') {
        this.$router.push('/');
      } else {
        this.$router.push('/Projects');
      }
    },
    // setThemeSession() {
    //   return this.$store.state.darkTheme;
    // },
    // setLangSession() {
    //   return this.$store.state.lang;
    // },
    themeHandler() {
      if (this.$vuetify.theme.dark == false) {
        this.iconTheme = 'mdi-white-balance-sunny';
        this.$vuetify.theme.dark = true;
        // this.darkTheme(this.$vuetify.theme.dark);
        // this.setThemeSession() =  this.$vuetify.theme.dark;
        this.darkTheme = this.$vuetify.theme.dark;
        console.log(this.darkTheme);
        sessionStorage.setItem(
          'darkTheme',
          JSON.stringify(this.$vuetify.theme.dark)
        );
      } else {
        this.iconTheme = 'mdi-weather-night';
        this.$vuetify.theme.dark = false;
        // this.darkTheme(this.$vuetify.theme.dark);
        sessionStorage.setItem(
          'darkTheme',
          JSON.stringify(this.$vuetify.theme.dark)
        );
        // this.setThemeSession() =  this.$vuetify.theme.dark;
        // sessionStorage.setItem('darkTheme', this.$vuetify.theme.dark);
      }
    },
    // darkTheme(theme) {
    //   this.$store.commit('darkTheme', theme);
    // },
    // language(lang) {
    //   this.$store.commit('language', lang);
    // },
  },
  beforeCreate() {
    this.$store.commit('initializeTheme');
  },
  mounted() {
    const lastTheme = JSON.parse(sessionStorage.getItem('darkTheme'));
    if (lastTheme == true) {
      this.$vuetify.theme.dark = true;
      this.iconTheme = 'mdi-white-balance-sunny';
    } else {
      this.$vuetify.theme.dark = false;
      this.iconTheme = 'mdi-weather-night';
    }
  },

  computed: {
    ...mapState(['darkTheme', 'language']),
  },

  watch: {
    local(value) {
      if (value) {
        this.$i18n.locale = 'fa';
        this.$vuetify.lang.current = 'fa';
        this.$vuetify.rtl = true;
        sessionStorage.setItem('lang', 'fa');
      } else {
        this.$i18n.locale = 'en';
        this.$vuetify.lang.current = 'en';
        this.$vuetify.rtl = false;
        sessionStorage.setItem('lang', 'en');
        // console.log(this.$store.language.current.name);
      }
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
