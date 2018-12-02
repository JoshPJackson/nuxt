<template>
  <horizontal-pie-chart-with-label
    :dataset="dataset"
    :options="options"
    title="this is the title"
    subtitle="this is the subtitle"/>
</template>

<script>
  import HorizontalPieChartWithLabel from "../charts/horizontal-pie-chart-with-label";
  export default {
    name: "user-count-by-state-pie-chart",
    data() {
      return {
        dataset: null,
        options: null
      }
    },
    components: {HorizontalPieChartWithLabel},
    mounted() {
      this.dataset = this.$store.getters['metrics/userCountByState'];
    }
  }
</script>

<style scoped>

</style>
