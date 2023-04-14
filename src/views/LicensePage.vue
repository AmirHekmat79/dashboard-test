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
            :rules="[ruleRequired , nameRules]"
          ></v-text-field>

          <v-text-field
            v-model="customerName"
            :label="$t('customerName')"
            :rules="[vruleRequired , nameRules]"
          ></v-text-field>

          <v-text-field
            v-model="projectName"
            :label="$t('projectName')"
            :rules="[ruleRequired , nameRules]"
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
import { ruleRequired } from '../helpers/rules';
import { nameRules } from '../helpers/rules';
export default {
  data() {
    return {
      validityDuration: null,
      customerName: null,
      projectName: null,
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
    ruleRequired,
    nameRules,
    AddLicense() {
      if (this.$refs.form.validate()) {
        if (
          this.validityDuration != null &&
          this.customerName != null &&
          this.projectName != null
        ) {
          this.licenseDetails.push({
            validityDuration: this.validityDuration,
            customerName: this.customerName,
            projectName: this.projectName,
          });
        }
      }
    },
  },
  computed: {
    getHeaders() {
      const t = this.$t.bind(this);
      return [
        { align: 'center' },
        { text: t('validityDuration'), value: 'validityDuration' },
        { text: t('customerName'), value: 'customerName' },
        { text: t('projectName'), value: 'projectName' },
      ];
    },
  },
  mounted() {
    getOneLicense().then((res) => {
      console.log(res);
    });
  },
};
</script>
