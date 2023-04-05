<template>
  <v-container>
    <v-card
      elevation="4"
      class="pa-4 page-title-container text-center d-flex justify-space-around items-center ma-6"
    >
      <v-btn elevation="5" color="warning"> {{ $t('refreshingTable') }} </v-btn>
      <h4 class="text--gray px-5">{{ $t('UsersTable') }}</h4>

      <AddDialogs
        :title="$t('modalUserTitleForm')"
        :btnTitle="$t('AddUserBtn')"
      >
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="username"
            :label="$t('username')"
            :rules="[ruleRequired, nameRules]"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :label="$t('password')"
            :rules="[ruleRequired, passwordRules]"
          ></v-text-field>

          <v-btn color="warning" @click="AddUser"> {{ $t('Add') }} </v-btn>
        </v-form>
      </AddDialogs>
    </v-card>
    <v-data-table
      :footer-props="{ 'items-per-page-text': this.$t('itemsPerPageText') }"
      :headers="getHeaders"
      :items="usersDetails"
      class="elevation-4 font-weight-bold"
    >
      <template v-slot:[`header.name`]="{ header }">
        {{ header.text.toUpperCase() }}
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { getOneUser } from '@/api/apiUsers';
import AddDialogs from '@/components/AddDialogs.vue';
import { ruleRequired } from '../helpers/rules';
import { nameRules } from '../helpers/rules';
import { passwordRules } from '../helpers/rules';
export default {
  data: () => ({
    username: null,
    password: null,

    usersDetails: [
      {
        username: 'rezvani2001',
        password: 'Amir@1380',
      },
      {
        username: 'rezvani2001',
        password: 'Amir@1380',
      },
      {
        username: 'rezvani2001',
        password: 'Amir@1380',
      },
      {
        username: 'rezvani2001',
        password: 'Amir@1380',
      },
      {
        username: 'rezvani2001',
        password: 'Amir@1380',
      },
      {
        username: 'rezvani2001',
        password: 'Amir@1380',
      },
      {
        username: 'rezvani2001',
        password: 'Amir@1380',
      },
      {
        username: 'rezvani2001',
        password: 'Amir@1380',
      },
      {
        username: 'rezvani2001',
        password: 'Amir@1380',
      },
      {
        username: 'rezvani2001',
        password: 'Amir@1380',
      },
    ],
  }),
  components: {
    AddDialogs,
  },

  methods: {
    ruleRequired,
    passwordRules,
    nameRules,
    AddUser() {
      if (this.password != null && this.password != null) {
        this.usersDetails.push({
          username: this.username,
          password: this.password,
        });
        console.log(this.usersDetails);
      } else {
        prompt('Enter valid value !');
        console.log(this.usersDetails);
      }
    },
  },
  computed: {
    getHeaders() {
      const t = this.$t.bind(this);
      return [
        { align: 'center' },
        { text: t('Username'), value: 'username' },
        { text: t('Password'), value: 'password' },
      ];
    },

    // rowPerPageLocale() {
    //   if (this.$i18n.locale == 'fa') {
    //     return 'ردیف در صفحه:';
    //   } else {
    //     return 'rows per page:';
    //   }
    // },
  },
  mounted() {
    getOneUser().then((res) => {
      console.log(res);
    });
  },
};
</script>
