<template>
  <v-container class="fluid mt-20">
    <!-- <highcharts
      :constructor-type="'stockChart'"
      :options="chartOptions"
    ></highcharts> -->
    <v-row>
      <v-col v-for="card in cards" :key="card">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> {{ card.title }} </v-card-title>

          <v-card-subtitle> {{ card.subtitle }}</v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> {{ card.btnText }} </v-btn>

            <v-spacer></v-spacer>

            <v-icon> {{ card.iconTitle }}</v-icon>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import { Chart } from "highcharts-vue";
// import Highcharts from "highcharts";
// import stockInit from "highcharts/modules/stock";

// stockInit(Highcharts);

export default {
  name: "DashboardPannel",

  data: () => ({
    //
    // chartOptions: [
    //   {
    //     data: [1, 2, 3], // sample data
    //   },
    // ],
    cards: [
      {
        title: "Top western road trips",
        subtitle: "1,000 miles of wonder",
        btnText: "Explore",
        iconTitle: "mdi-account-box",
      },
      {
        title: "Top western road trips",
        subtitle: "1,000 miles of wonder",
        btnText: "Explore",
        iconTitle: "mdi-account-box",
      },
      {
        title: "Top western road trips",
        subtitle: "1,000 miles of wonder",
        btnText: "Explore",
        iconTitle: "mdi-account-box",
      },
    ],
  }),
  components: {
    // highcharts: Chart,
  },
};
</script>
