<template>
  <b-card>
    <b-container fluid>
      <b-row>
        <b-col>
          <pie-chart :data="dataset" :options="options"/>
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
      props: ['title', 'subtitle', 'dataset', 'options']
    }
</script>

<style scoped>

</style>
