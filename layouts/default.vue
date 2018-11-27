<template>
  <div id="body" class="h-100">
    <b-container id="navbar-container" fluid>
      <Navbar v-if="$auth.loggedIn"/>
    </b-container>
    <b-container class="h-100 px-0 w-100" fluid>
      <b-row class="h-100 w-100 px-0 mx-0">
        <b-col class="px-0">
      <nuxt class="h-100"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Navbar from "../components/navbar/Navbar";

  export default {
    name: "default",
    components: {Navbar},
    data() {
      return {
        head: {
          metaInfo: {
            bodyAttrs: {
              bar: 'baz'
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  #navbar-container {
    padding:0;
  }
</style>
