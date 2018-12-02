<script>
  import { Doughnut } from 'vue-chartjs'
  export default {
    name: "user-count-by-state-doughnut-chart",
    extends: Doughnut,
    data() {
      return {
        data: null,
        options: {
          legend: {
            display: false
          }
        }
      }
    },
    mounted () {
      this.data = this.$store.getters['metrics/userCountByState'];
      this.renderChart(this.data, this.options);
      this.maintainAspectRatio = true;
      this.responsive = true;
    }
  }
</script>

<style scoped>

</style>
