<template>
  <div class="mt-20">
    <highcharts
      :constructor-type="'stockChart'"
      :options="chartOptions"
    ></highcharts>
  </div>
</template>
<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import stockInit from "highcharts/modules/stock";

stockInit(Highcharts);

export default {
  name: "DashboardPannel",

  data: () => ({
    //
    chartOptions: [
      {
        data: [1, 2, 3], // sample data
      },
    ],
  }),
  components: {
    highcharts: Chart,
  },
};
</script>
