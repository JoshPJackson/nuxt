<template>
  <b-card id="image-count-with-label" no-body class="h-100">
    <b-container fluid class="h-100">
      <b-row class="align-items-center h-100">
        <b-col cols="7" class="mr-0 pr-0 text-right align-middle">
          <h1 class="larger-text">{{ count }}</h1>
        </b-col>
        <b-col cols="5" class="pl-0">
          <h5>Images</h5>
          <h6>in system</h6>
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
  export default {
    name: "image-count-with-label",
    data() {
      return {
        count: 0
      }
    }
  }
</script>

<style scoped>
.larger-text {
  font-size: 4rem;
  line-height: 50%;
}

#user-count-with-label {
  background-color: white;
  min-width: 220px;
}
</style>
