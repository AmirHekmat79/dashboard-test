<template>
  <v-container class="fluid mt-20">
    <v-row class="d-flex justify-center items-center flex-wrap">
      <v-col col="4" v-for="card in cards" :key="card.item">
        <v-card class="align-center">
          <v-icon class="Margin1 pt-3" :color="card.Color">{{
            card.icon
          }}</v-icon>
          <v-card-title class="py-3 font-weight-bold Margin2">{{
            card.counts
          }}</v-card-title>
          <v-card-subtitle class="Margin3">
            {{ card.item }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center items-center flex-wrap">
      <v-col col="4">
        <v-card class="elevation-4 text-center">
          <v-card-title class="font-weight-bold">وضعیت مشتری ها</v-card-title>
          <ColumnChart :xAxis="chart.xAxis" :series="chart.customers" />
        </v-card>
      </v-col>
      <v-col col="4">
        <v-card class="elevation-4">
          <v-card-title class="font-weight-bold">وضعیت پروژه ها</v-card-title>
          <LineChart :xAxis="chart.xAxis" :series="chart.projects" />
        </v-card>
      </v-col>
      <v-col col="4">
        <v-card class="elevation-4">
          <v-card-title class="font-weight-bold">وضعیت کاربران </v-card-title>
          <ColumnChart :xAxis="chart.xAxis" :series="chart.users" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import { Chart } from 'highcharts-vue';
// import Highcharts from 'highcharts';
// import stockInit from 'highcharts/modules/stock';

// stockInit(Highcharts);

// import Highcharts from "highcharts";
// import stockInit from "highcharts/modules/stock";

// stockInit(Highcharts);
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
      chart: {
        title: 'Area chart title',
        subtitle: 'Area chart subtitle',
        backgroundColor: '#eee',
        xAxis: {
          // config here
          categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007],
        },
        users: [
          // config here
          {
            name: 'کاربران فعال',
            color: '#2f7ed8',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
          },
          {
            name: 'کاربران غیر فعال',
            color: '#0d233a',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
          },
        ],
        projects: [
          // config here
          {
            name: 'پروژه فعال',
            color: '#03bbd4',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
          },
          {
            name: 'پروژه غیر فعال',
            color: '#f7a35c',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
          },
        ],
        customers: [
          // config here
          {
            name: 'مشتری ها ',
            color: '#03bbd4',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
          },
          // {
          //   name: 'پروژه غیر فعال',
          //   color: '#f7a35c',
          //   data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
          // },
        ],
        //   config: {
        //     colors: ['#2f7ed8', '#0d233a'],
        //     credits: {
        //       enabled: true
        //     },
        //     // caption: {
        //     //   text: '<b>The caption renders in the bottom, and is part of the exported chart.</b>'
        //     // }
        // },
      },

      cards: [
        {
          item: 'پیام ها',
          icon: 'mdi-bell',
          counts: 853,
          Color: 'warning',
        },
        {
          item: 'سود امروز',
          icon: 'mdi-bank',
          counts: '$' + 3521,
          Color: 'success',
        },
        {
          item: 'مشتری ها',
          icon: 'mdi-account',
          counts: 562,
          Color: 'primary',
        },
        {
          item: 'پشتیبانی',
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
.Margin1 {
  /* text-align: center; */
  margin-right: 130px;
}
.Margin2 {
  /* text-align: center; */
  margin-right: 114px;
}
.Margin3 {
  /* text-align: center; */
  margin-right: 110px;
}
</style>
