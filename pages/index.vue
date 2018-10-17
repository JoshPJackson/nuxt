<template>
  <div>
    <div>
      <strong>Strategy</strong>
      <pre>{{ strategy }}</pre>
    </div>
    <div>
      <strong>User</strong>
      <pre>{{ $auth.user }}</pre>
      <pre>{{ getModel() }}</pre>
      <hr>
    </div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
  import UserState from "../models/userstate.js"

  export default {
    data() {
      return {
        strategy: this.$auth.$storage.getUniversal("strategy"),
        model: this.getModel()
      }
    },
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
      }
    },
  };
</script>

<style>

</style>
