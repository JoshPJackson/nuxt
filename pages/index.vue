<template>
  <div>
    <div>
      <user-count-by-state-pie-chart/>
    </div>
    <div>
      <strong>User</strong>
      <pre>{{ $auth.user }}</pre>
      <hr>
    </div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>

  import UserCountByStatePieChart from "../components/charts/user-count-by-state-doughnut-chart";

  export default {
    components: {UserCountByStatePieChart},
    methods: {

      logout() {
        this.$auth.logout();
        this.$router.replace("/login");
      },

      async getModel() {
        let model = await UserState.$get({
          params: {
            id: 1
          }
        });

        return model;
      },
    }
  };
</script>

<style>

</style>
