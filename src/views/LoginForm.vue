<template>
  <div>
    <div class="login-content">
      <v-container class="fluid">
        <h1 class="login-page-title mb-6">سامانه مدیریت گواهی</h1>
        <v-layout class="align-center justify-center">
          <v-col xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary" class="text-center">
                <v-toolbar-title>ورود به پنل</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account-box"
                    name="login"
                    label="نام کاربری"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="رمز ورود"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" to="/">ورود</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    source: String,
  },
  data() {
    return {
      // valid: false,
      // firstname: "",
      // lastname: "",
    };
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
