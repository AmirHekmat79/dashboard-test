<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn elevation="5" color="success" dark v-bind="attrs" v-on="on"
          >{{ btnTitle }}
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h6 grey lighten-2">
          {{ title }}
        </v-card-title>

        <v-card-text>
          <slot />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialog = false"> بستن </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddDialogs',

  props: {
    title: {
      type: String,
      default: 'اطلاعات زیر را وارد کنید.',
    },
    btnTitle: {
      type: String,
      default: 'افزودن',
    },
  },

  data() {
    return {
      dialog: false,
    };
  },
};
</script>
