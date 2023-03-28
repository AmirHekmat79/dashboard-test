<template>
  <v-container>
    <v-card
      elevation="4"
      class="pa-4 page-title-container text-center d-flex justify-space-around items-center ma-6"
    >
      <v-btn elevation="5" color="warning">{{ $t('refreshingTable') }} </v-btn>
      <h4 class="text--gray px-5">{{ $t('ProjectsTable') }}</h4>

      <AddDialogs
        :title="$t('modalProjectTitleForm')"
        :btnTitle="$t('AddProjectBtn')"
      >
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="name"
            :label="$t('name')"
            :rules="[ruleRequired]"
          ></v-text-field>
          <v-text-field
            v-model="description"
            :label="$t('description')"
            :rules="[ruleRequired]"
          ></v-text-field>

          <v-btn color="warning" @click="AddProject"> {{ $t('Add') }} </v-btn>
        </v-form>
      </AddDialogs>
    </v-card>
    <v-data-table
      :headers="getHeaders"
      :items="projectsDetails"
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

    // headers: [
    //   {
    //     align: 'center',
    //   },
    //   { text: 'name', value: 'name' },
    //   {
    //     text: 'description',
    //     value: 'description',
    //   },
    // ],
    projectsDetails: [
      {
        name: 'passw',
        // parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        // parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        // parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        // parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        // parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        // parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        // parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        // parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        // parameters: ['hi'],
        description: 'password manager',
      },
      {
        name: 'passw',
        // parameters: ['hi'],
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
  computed: {
    getHeaders() {
      const t = this.$t.bind(this);
      return [
        {align : 'center'},
        { text: t('name'), value: 'name' },
        { text: t('description'), value: 'description' },
      ];
    },
  },
  created() {
    getOneProject().then((res) => {
      console.log(res);
    });
  },
};
</script>
