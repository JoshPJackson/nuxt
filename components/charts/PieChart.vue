<script>
  import { Pie } from 'vue-chartjs'

    export default {
      name: "PieChart",
      extends: Pie,
      props: [
        'data', 'options'
      ],
      mounted () {
        this.renderChart(data, options)
      }
    }
</script>

<style scoped>

</style>
