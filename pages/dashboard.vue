<template>
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <b-card>
            <b-container fluid>
              <b-row>
                <b-col cols="6">
                  <user-count-by-state-doughnut-chart class="position-relative"/>
                </b-col>
                <b-col cols="6">
                  <h5>Users</h5>
                  <h6>by state</h6>
                </b-col>
              </b-row>
            </b-container>
          </b-card>
        </b-col>
        <b-col cols="3">
          <user-count-by-state-doughnut-chart/>
        </b-col>
        <b-col cols="3">
          <user-count-by-state-doughnut-chart/>
        </b-col>
        <b-col cols="3">
          <user-count-by-state-doughnut-chart/>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
    import UserCountByStateDoughnutChart from "../components/charts/user-count-by-state-doughnut-chart";
    import UserState from '../models/userstate.js';

    export default {
      name: "dashboard",
      components: {UserCountByStateDoughnutChart},
      async asyncData ({ store, params }) {

        // populate the user states store with all states
        await UserState.$fetch();

        // get the user count by state
        let split = await store.$axios.get('api/users/state/count').then((response) => {
          return response.data;
        });

        let dataPoints = [];
        let dataLabels = [];

        for (var key in split) {
          dataPoints.push(split[key]);
          let userstate = await UserState.find(key);
          dataLabels.push(userstate.name);
        }

        await store.dispatch('metrics/setUserCountByStateData', {
          labels: dataLabels,
          datasets: [
            {
              label: 'my pie chart',
              data: dataPoints,
              backgroundColor: [
                'rgba(106, 167, 192, 0.2)',
                'rgba(106, 167, 192, 0.4)',
                'rgba(106, 167, 192, 0.6)',
                'rgba(106, 167, 192, 0.8)',
                'rgba(106, 167, 192, 1)'
              ]
            }
          ]
        });
      }
    }
</script>

<style scoped>

</style>
