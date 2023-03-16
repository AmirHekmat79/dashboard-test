<template>
  <v-container>
    <v-card
      elevation="4"
      class="pa-4 page-title-container text-center d-flex justify-space-around items-center ma-6"
    >
      <v-btn elevation="5" color="warning"> رفرش جدول</v-btn>
      <h4 class="text--gray px-5">جدول پروژه ها</h4>

      <AddDialogs
        title="اطلاعات پروژه مورد نظر را وارد کنید"
        btnTitle="افزودن پروژه"
      >
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="name"
            label="اسم"
            :rules="[ruleRequired]"
          ></v-text-field>
          <v-text-field
            v-model="description"
            label="توضیحات"
            :rules="[ruleRequired]"
          ></v-text-field>

          <v-btn color="warning" @click="AddProject"> افزودن </v-btn>
        </v-form>
      </AddDialogs>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="desserts"
      dark
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
import { ruleRequired } from '@/helpers/rules.js';
import { getOneProject } from '@/api/apiProjects';
export default {
  data: () => ({
    description: null,
    name: null,
    customerName: null,

    headers: [
      {
        align: 'center',
      },
      { text: 'name', value: 'name' },
      { text: 'description', value: 'description' },
    ],
    desserts: [
      {
        name: 'passw',
        parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        parameters: ['hi'],
        description: 'password manager',
      },
    ],
  }),
  components: {
    AddDialogs,
  },

  methods: {
    ruleRequired,

    AddProject() {
      if (!this.$refs.form.validate()) {
        console.log('not valid');
        return;
      }

      console.log('reached');
    },
  },
  created() {
    getOneProject().then((res) => {
      console.log(res);
    });
  },
};
</script>
