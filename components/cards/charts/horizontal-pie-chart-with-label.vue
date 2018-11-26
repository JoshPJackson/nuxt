<template>
  <b-card>
    <b-container fluid>
      <b-row>
        <b-col>
          <pie-chart :data="data" :options="options"/>
        </b-col>
        <b-col>
          <span class="card-body-title">{{ title }}</span>
          <br>
          <span class="card-body-subtitle">{{ subtitle }}</span>
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
    import PieChart from "../../charts/PieChart";
    export default {
      name: "horizontal-pie-chart-with-label",
      components: {PieChart},
      props: ['title', 'subtitle', 'data', 'options']
    }
</script>

<style scoped>

</style>
