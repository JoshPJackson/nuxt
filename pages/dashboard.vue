<template>
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <b-card>
            <b-container fluid>
              <b-row class="align-items-center">
                <b-col cols="6">
                  <user-count-by-state-doughnut-chart class="position-relative"/>
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
        </b-col>
        <b-col cols="3">
          <user-count-with-label/>
        </b-col>
        <b-col cols="3">
        </b-col>
        <b-col cols="3">
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
    import UserCountByStateDoughnutChart from "../components/charts/user-count-by-state-doughnut-chart";
    import UserState from '../models/userstate.js';
    import UserCountWithLabel from "../components/cards/metrics/user-count-with-label";

    export default {
      name: "dashboard",
      components: {UserCountWithLabel, UserCountByStateDoughnutChart},
      async asyncData ({ store, params }) {
        await store.dispatch('metrics/setUserCountByStateData');
        await store.dispatch('metrics/setUserCount');
      }
    }
</script>

<style scoped>

</style>
