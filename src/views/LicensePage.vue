<template>
  <v-container>
    <v-card
      elevation="4"
      class="pa-4 page-title-container text-center d-flex justify-space-around items-center ma-6"
    >
      <v-btn elevation="5" color="warning">{{ $t('refreshingTable') }}</v-btn>
      <h4 class="text--gray px-5">{{ $t('LicensesTable') }}</h4>
      <AddDialogs
        :title="$t('modalLicenseTitleForm')"
        :btnTitle="$t('AddLicenseBtn')"
      >
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="validityDuration"
            :label="$t('validityDuration')"
            :rules="[validateCustomerName]"
          ></v-text-field>

          <v-text-field
            v-model="customerName"
            :label="$t('customerName')"
            :rules="[validateCustomerName]"
          ></v-text-field>

          <v-text-field
            v-model="projectName"
            :label="$t('projectName')"
            :rules="[validateCustomerName]"
            required
          ></v-text-field>

          <v-btn color="warning" @click="AddLicense"> {{ $t('Add') }} </v-btn>
        </v-form>
      </AddDialogs>
    </v-card>
    <v-data-table
      
      :headers="getHeaders"
      :items="licenseDetails"
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
import { getOneLicense } from '@/api/apiLicenses';
import { validateCustomerName } from '@/helpers/rules';
export default {
  data() {
    return {
      validityDuration: null,
      customerName : null ,
      projectName : null,
     

      // headers: [
      //   {
      //     align: 'center',
      //   },
      //   { text: this.$t('validityDuration'), value: 'validityDuration' },
      //   { text: this.$t('customerName'), value: 'customerName' },
      //   { text: this.$t('projectName'), value: 'projectName' },
      // ],
      licenseDetails: [
        {
          validityDuration: 86400,
          parameters: {
            hi: 'by',
          },
          customerName: 'amirh01',
          projectName: 'passw',
        },
        {
          validityDuration: 86400,
          parameters: {
            hi: 'by',
          },
          customerName: 'amirh01',
          projectName: 'passw',
        },
        {
          validityDuration: 86400,
          parameters: {
            hi: 'by',
          },
          customerName: 'amirh01',
          projectName: 'passw',
        },
        {
          validityDuration: 86400,
          parameters: {
            hi: 'by',
          },
          customerName: 'amirh01',
          projectName: 'passw',
        },
        {
          validityDuration: 86400,
          parameters: {
            hi: 'by',
          },
          customerName: 'amirh01',
          projectName: 'passw',
        },
        {
          validityDuration: 86400,
          parameters: {
            hi: 'by',
          },
          customerName: 'amirh01',
          projectName: 'passw',
        },
        {
          validityDuration: 86400,
          parameters: {
            hi: 'by',
          },
          customerName: 'amirh01',
          projectName: 'passw',
        },
        {
          validityDuration: 86400,
          parameters: {
            hi: 'by',
          },
          customerName: 'amirh01',
          projectName: 'passw',
        },
        {
          validityDuration: 86400,
          parameters: {
            hi: 'by',
          },
          customerName: 'amirh01',
          projectName: 'passw',
        },
        {
          validityDuration: 86400,
          parameters: {
            hi: 'by',
          },
          customerName: 'amirh01',
          projectName: 'passw',
        },
      ],
    };
  },
  components: {
    AddDialogs,
  },
  methods: {
    validateCustomerName,
    AddLicense() {
      if (!this.$refs.form.validate()) {
        console.log('not valid');
        return;
      }
    },
  },
  computed: {
    getHeaders() {
      const t = this.$t.bind(this);
      return [
        {align : 'center'},
        { text: t('validityDuration'), value: 'validityDuration' },
        { text: t('customerName'), value: 'customerName' },
        { text: t('projectName'), value: 'projectName' },
      ];
    },
  },
  created() {
    getOneLicense().then((res) => {
      console.log(res);
    });
  },
};
</script>
