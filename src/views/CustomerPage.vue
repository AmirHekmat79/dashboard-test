<template>
  <v-container>
    <v-card
      elevation="4"
      class="pa-4 page-title-container text-center d-flex justify-space-around items-center ma-6"
    >
      <v-btn elevation="5" color="warning">{{ $t('refreshingTable') }}</v-btn>
      <h4 class="text--gray px-5">{{ $t('CutomersTable') }}</h4>
      <AddDialogs
        :title="$t('modalCustomerTitleForm')"
        :btnTitle="$t('AddCustomerBtn')"
      >
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="name"
            :label="$t('Username')"
            :rules="[ruleRequired, nameRules]"
          ></v-text-field>

          <v-text-field
            v-model="email"
            :label="$t('email')"
            :rules="[ruleRequired, emailRules]"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :label="$t('Password')"
            :rules="[ruleRequired, passwordRules]"
          ></v-text-field>
          <v-text-field
            v-model="address"
            :label="$t('address')"
            :rules="[ruleRequired, addressRules]"
          ></v-text-field>
          <v-text-field
            v-model="phoneNumber"
            :label="$t('phoneNumber')"
            :rules="[ruleRequired, phoneNumberRules]"
          ></v-text-field>

          <v-btn color="warning" @click="AddCustomer"> {{ $t('Add') }} </v-btn>
        </v-form>
      </AddDialogs>
    </v-card>
    <v-data-table
      :headers="getHeaders"
      :items="customerDetails"
      class="text-center elevation-4 font-weight-bold"
    >
      <template v-slot:[`header.name`]="{ header }">
        {{ header.text.toUpperCase() }}
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import AddDialogs from '@/components/AddDialogs.vue';
import { getOneCustomer } from '@/api/apiCustomer';
import { nameRules } from '../helpers/rules';
import { emailRules } from '../helpers/rules';
import { passwordRules } from '../helpers/rules';
import { phoneNumberRules } from '../helpers/rules';
import { addressRules } from '../helpers/rules';
import { ruleRequired } from '../helpers/rules';
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      phoneNumber: null,
      address: null,
      customerDetails: [
        {
          name: 'amir',
          email: 'rezvani@gmail.com',
          address: 'amirabad, mamad st',
          phoneNumber: '09128456788',
          password: 'Amir@1380',
        },
        {
          name: 'Hossein',
          email: 'Hosseini@gmail.com',
          address: 'amirabad, mamad st',
          phoneNumber: '09128456788',
          password: 'Amir@1380',
        },
        {
          name: 'Ali',
          email: 'Ali@gmail.com',
          address: 'amirabad, mamad st',
          phoneNumber: '09128456788',
          password: 'Amir@1380',
        },
        {
          name: 'Shervin',
          email: 'Shervin@gmail.com',
          address: 'amirabad, mamad st',
          phoneNumber: '09128456788',
          password: 'Amir@1380',
        },
        {
          name: 'Sahand',
          email: 'Sahand@gmail.com',
          address: 'amirabad, mamad st',
          phoneNumber: '09128456788',
          password: 'Amir@1380',
        },
        {
          name: 'Sahand',
          email: 'Sahand@gmail.com',
          address: 'amirabad, mamad st',
          phoneNumber: '09128456788',
          password: 'Amir@1380',
        },
        {
          name: 'Parsa',
          email: 'Parsa@gmail.com',
          address: 'amirabad, mamad st',
          phoneNumber: '09128456788',
          password: 'Parsa@1380',
        },
        {
          name: 'Emad',
          email: 'Emad@gmail.com',
          address: 'amirabad, mamad st',
          phoneNumber: '09128456788',
          password: 'Emad@1380',
        },
        {
          name: 'Tina',
          email: 'Tina@gmail.com',
          address: 'amirabad, mamad st',
          phoneNumber: '09128456788',
          password: 'Tina@1380',
        },
        {
          name: 'Mohammad',
          email: 'Mohammad@gmail.com',
          address: 'amirabad, mamad st',
          phoneNumber: '09128456788',
          password: 'Mohammad@1380',
        },
      ],
    };
  },
  components: {
    AddDialogs,
  },
  methods: {
    ruleRequired,
    nameRules,
    emailRules,
    passwordRules,
    phoneNumberRules,
    addressRules,
    AddCustomer() {
      if (this.$refs.form.validate()) {
        this.customerDetails.push({
          name: this.name,
          email: this.email,
          phoneNumber: this.phoneNumber,
          address: this.address,
          password: this.password,
        });
      }
    },
  },
  computed: {
    getHeaders() {
      const t = this.$t.bind(this);
      return [
        { align: 'center' },
        { text: t('name'), value: 'name' },
        { text: t('email'), value: 'email' },
        { text: t('phoneNumber'), value: 'phoneNumber' },
        { text: t('address'), value: 'address' },
        { text: t('Password'), value: 'password' },
      ];
    },
  },
  created() {
    getOneCustomer().then((res) => {
      console.log(res);
    });
  },
};
</script>
