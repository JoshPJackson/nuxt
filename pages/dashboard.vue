<template>
    <b-container fluid>
      <b-row>
        <b-col id="user-count-by-type-doughnut-chart-container" cols="3">
          <user-count-by-type-doughnut-chart-metric class="shadow"/>
        </b-col>
        <b-col id="user-count-with-label-container" cols="3">
          <user-count-with-label-metric class="shadow"/>
        </b-col>
        <b-col id="user-count-by-state-doughnut-chart-container" cols="3">
          <user-count-by-state-doughnut-chart-metric class="shadow"/>
        </b-col>
        <b-col id="image-count-with-label" cols="3">
          <image-count-with-label class="shadow"/>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
    import UserCountByStateDoughnutChartMetric from "@/components/cards/metrics/user-count-by-state-doughnut-chart";
    import UserCountWithLabelMetric from "@/components/cards/metrics/user-count-with-label";
    import UserCountByTypeDoughnutChartMetric from "@/components/cards/metrics/user-count-by-type-doughnut-chart";
    import ImageCountWithLabel from "../components/cards/metrics/image-count-with-label";

    export default {
      name: "dashboard",
      components: {
        ImageCountWithLabel,
        UserCountByTypeDoughnutChartMetric, UserCountWithLabelMetric, UserCountByStateDoughnutChartMetric},
      async asyncData ({ store, params }) {
        await store.dispatch('metrics/setUserCountByStateData');
        await store.dispatch('metrics/setUserCount');
        await store.dispatch('metrics/setUserCountByTypeData');
      },
      async mounted() {
        let chart1 = document.getElementById('metrics-user-count-by-type-doughnut-chart');
        let chart2 = document.getElementById('user-count-with-label');
        let chart3 = document.getElementById('metrics-user-count-by-state-doughnut-chart');
        let chart4 = document.getElementById('image-count-with-label');

        let col1 = document.getElementById('user-count-by-type-doughnut-chart-container');
        let col2 = document.getElementById('user-count-with-label-container');
        let col3 = document.getElementById('user-count-by-state-doughnut-chart-container');
        let col4 = document.getElementById('image-count-with-label');

        col1.style.minWidth = chart1.style.minWidth;
        col2.style.minWidth = chart2.style.minWidth;
        col3.style.minWidth = chart3.style.minWidth;
        col4.style.minWidth = chart4.style.minWidth;
      }
    }
</script>

<style scoped>

</style>
