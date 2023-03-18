<template>
  <v-container>
    <v-card
      elevation="4"
      class="pa-4 page-title-container text-center d-flex justify-space-around items-center ma-6"
    >
      <v-btn elevation="5" color="warning"> رفرش جدول</v-btn>
      <h4 class="text--gray px-5">جدول لایسنس ها</h4>
      <AddDialogs
        title="اطلاعات لایسنس مورد نظر را وارد کنید"
        btnTitle="افزودن لایسنس"
      >
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="validityDuration"
            label="مدت اعتبار"
            :rules="[validateCustomerName]"
          ></v-text-field>

          <v-text-field
            v-model="customerName"
            label="نام مشتری"
            :rules="[validateCustomerName]"
          ></v-text-field>

          <v-text-field
            v-model="projectName"
            label="نام پروژه"
            :rules="[validateCustomerName]"
            required
          ></v-text-field>

          <v-btn color="warning" @click="AddLicense"> افزودن </v-btn>
        </v-form>
      </AddDialogs>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="desserts"
      
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

      address: null,
      phoneNumber: null,

      headers: [
        {
          align: 'center',
        },
        { text: 'validityDuration', value: 'validityDuration' },
        { text: ' customerName', value: 'customerName' },
        { text: 'projectName', value: 'projectName' },
      ],
      desserts: [
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
  created() {
    getOneLicense().then((res) => {
      console.log(res);
    });
  },
};
</script>
