<script>
  import { Pie } from 'vue-chartjs'

  export default {
    name: "PieChart",
    extends: Pie,
    props: ['data', 'options'],
    mounted () {
      this.data = this.$store.getters['metrics/usersCountByState'];
      this.renderChart(this.data, this.options)
    },
  }
</script>

<style scoped>

</style>
