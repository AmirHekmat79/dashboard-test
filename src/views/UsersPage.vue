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
            :rules="[ruleRequired]"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :label="$t('password')"
            :rules="[ruleRequired]"
          ></v-text-field>

          <v-btn color="warning" @click="AddUser"> {{ $t('Add') }} </v-btn>
        </v-form>
      </AddDialogs>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="desserts"
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

export default {
  data: () => ({
    username: null,
    password: null,

    headers: [
      {
        align: 'center',
      },
      { text: 'Username', value: 'username' },
      { text: 'Password', value: 'password' },
    ],
    desserts: [
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

    AddUser() {
      if (!this.$refs.form.validate()) {
        console.log('not valid');
        return;
      }

      console.log('reached');
    },
  },
  created() {
    getOneUser().then((res) => {
      console.log(res);
    });
  },
};
</script>
