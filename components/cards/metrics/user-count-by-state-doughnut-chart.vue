<template>
  <b-card id="metrics-user-count-by-state-doughnut-chart">
    <b-container fluid>
      <b-row class="align-items-center">
        <b-col cols="6">
          <user-count-by-state-doughnut-chart/>
        </b-col>
        <b-col cols="6">
          <div>
            <h5>Users</h5>
            <h6>by state</h6>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
  import UserCountByStateDoughnutChart from "@/components/charts/user-count-by-state-doughnut-chart";

  export default {
    name: "user-count-by-state-doughnut-chart-metric",
    components: {UserCountByStateDoughnutChart},
  }
</script>

<style scoped>
  #metrics-user-count-by-state-doughnut-chart {
    min-width: 225px;
  }
</style>
