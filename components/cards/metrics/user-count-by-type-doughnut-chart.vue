<template>
  <b-card id="metrics-user-count-by-type-doughnut-chart">
    <b-container fluid>
      <b-row class="align-items-center">
        <b-col cols="6">
          <user-count-by-type-doughnut-chart/>
        </b-col>
        <b-col cols="6">
          <div>
            <h5>Users</h5>
            <h6>by type</h6>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
  import UserCountByTypeDoughnutChart from "@/components/charts/user-count-by-type-doughnut-chart";

  export default {
    name: "user-count-by-type-doughnut-chart-metric",
    components: {UserCountByTypeDoughnutChart},
  }
</script>

<style scoped>
  #metrics-user-count-by-type-doughnut-chart {
    min-width: 225px;
  }
</style>
