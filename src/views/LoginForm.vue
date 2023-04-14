<template>
  <div>
    <div class="login-content">
      <v-container class="fluid">
        <h1 class="login-page-title black--text mb-6">
          {{ $t('dashboarMainTitle') }}
        </h1>
        <v-layout class="align-center justify-center">
          <v-col xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary" class="text-center">
                <v-toolbar-title> {{ $t('enterToPannel') }}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account-box"
                    name="login"
                    :label="$t('Username')"
                    v-model="username"
                    type="text"
                    :rules="[ruleRequired]"
                  ></v-text-field>
                  <v-text-field
                    id="Password"
                    prepend-icon="mdi-lock"
                    name="password"
                    :label="$t('Password')"
                    type="password"
                    v-model="password"
                    :rules="[ruleRequired]"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="loginUser">{{
                  $t('Entry')
                }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import { ruleRequired } from '../helpers/rules';
export default {
  name: 'LoginForm',
  props: {
    source: String,
  },
  data() {
    return {
      // valid: false,
      // firstname: "",
      // lastname: "",
      username: '',
      password: '',
    };
  },
  methods: {
    ruleRequired,
    loginUser() {
      if (this.username === 'test' && this.password === 'test') {
        this.$router.push('/');
      } else {
        console.log('error');
      }
    },
  },
};
</script>

<style scoped>
.login-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.login-page-title {
  text-align: center;
  margin: 30px;
}
</style>
