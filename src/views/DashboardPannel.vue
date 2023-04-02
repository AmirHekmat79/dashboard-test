<template>
  <v-container class="fluid mt-20">
    <v-row class="d-flex justify-center items-center flex-wrap">
      <v-col col="4" v-for="card in cards" :key="card.item">
        <v-card>
          <v-icon class="pt-3" :color="card.Color">{{ card.icon }}</v-icon>
          <v-card-title class="font-weight-bold"
            ><h3 class="py-3 mx-auto">{{ card.counts }}</h3></v-card-title
          >
          <v-card-subtitle>
            {{ $t(card.item) }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center items-center flex-wrap">
      <v-col col="4">
        <v-card class="elevation-4 text-center">
          <v-card-title class="font-weight-bold"
            ><h3 class="mx-auto">
              {{ $t('customerChartTitleCard') }}
            </h3></v-card-title
          >
          <ColumnChart :xAxis="chart.xAxis" :series="chart.customers" />
        </v-card>
      </v-col>
      <v-col col="4">
        <v-card class="elevation-4">
          <v-card-title class="font-weight-bold"
            ><h3 class="mx-auto">
              {{ $t('projectChartTitleCard') }}
            </h3></v-card-title
          >
          <LineChart :xAxis="chart.xAxis" :series="chart.projects" />
        </v-card>
      </v-col>
      <v-col col="4">
        <v-card class="elevation-4">
          <v-card-title class="font-weight-bold"
            ><h3 class="mx-auto">
              {{ $t('usersChartTitleCard') }}
            </h3></v-card-title
          >
          <ColumnChart :xAxis="chart.xAxis" :series="chart.users" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { ColumnChart } from 'vuejs-highcharts';
import { LineChart } from 'vuejs-highcharts';
export default {
  name: 'DashboardPannel',
  components: {
    ColumnChart,
    LineChart,
  },

  data() {
    return {
      Alignment: 'center',
      chart: {
        xAxis: {
          // config here
          categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007],
        },
        users: [
          // config here
          {
            name: this.$t('UsersActiveStatus'),
            color: '#2f7ed8',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
          },
          {
            name: this.$t('UsersInActiveStatus'),
            color: '#0d233a',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
          },
        ],
        projects: [
          // config here
          {
            name: this.$t('ActiveStatusProject'),
            color: '#03bbd4',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
          },
          {
            name: this.$t('InActiveStatusProject'),
            color: '#f7a35c',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
          },
        ],
        customers: [
          // config here
          {
            name: this.$t('customersRateChartSubtitle'),
            color: '#03bbd4',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
          },
        ],
      },

      cards: [
        {
          item: 'Messages',
          icon: 'mdi-bell',
          counts: 853,
          Color: 'warning',
        },
        {
          item: 'TodaysProfit',
          icon: 'mdi-bank',
          counts: '$' + 3521,
          Color: 'success',
        },
        {
          item: 'customersRateChartSubtitle',
          icon: 'mdi-account',
          counts: 562,
          Color: 'primary',
        },
        {
          item: 'support',
          icon: 'mdi-heart',
          counts: 353,
          Color: 'red',
        },
      ],
    };
  },
};
</script>
<style scoped>
.v-card {
  text-align: center;
}
</style>
