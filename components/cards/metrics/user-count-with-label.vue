<template>
  <b-card no-body class="h-100">
    <b-container fluid class="h-100">
      <b-row class="align-items-center h-100">
        <b-col cols="6" class="mr-0 pr-0 text-right align-middle">
          <h1 class="larger-text">{{ count }}</h1>
        </b-col>
        <b-col cols="6" class="pl-0">
          <h5>Users</h5>
          <h6>in system</h6>
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
  export default {
    name: "user-count-with-label",
    data() {
      return {
        count: 0
      }
    },
    mounted() {
      this.count = this.$store.getters['metrics/userCount'];
    }
  }
</script>

<style scoped>
.larger-text {
  font-size: 4rem;
  line-height: 50%;
}
</style>
