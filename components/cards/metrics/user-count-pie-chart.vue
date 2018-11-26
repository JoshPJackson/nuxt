<template>
    <horizontal-pie-chart-with-label :data="data" :options="options" :title="title" :subtitle="subtitle"/>
</template>

<script>
    import HorizontalPieChartWithLabel from "../charts/horizontal-pie-chart-with-label";
    import UserState from '@/models/userstate.js'

    export default {
      name: "user-count-pie-chart",
      components: {HorizontalPieChartWithLabel},
      data() {
        return {
          options: {

          },
          title: 'Title',
          subtitle: 'Subtitle'
        }
      },
      computed: {
        data() {
          $usertypes = UserState.all();

        },
      }
    }
</script>

<style scoped>

</style>
