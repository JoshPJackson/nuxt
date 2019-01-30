<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h2>My Account</h2>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col cols="6" xs="12">
        <your-details/>
      </b-col>
      <b-col cols="6" xs="12">
        <CommunicationPreferences/>
        <marketing-preferences class="mt-2"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import YourDetails from "../../components/Account/Index/YourDetails";
  import CommunicationPreferences from "../../components/Account/Index/CommunicationPreferences";
  import MarketingPreferences from "../../components/Account/Index/MarketingPreferences";
  export default {
    name: "index",
    components: {MarketingPreferences, CommunicationPreferences, YourDetails}
  }
</script>

<style scoped>

</style>
