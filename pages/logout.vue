<template>
    <span>You have been logged out</span>
</template>

<script>
    export default {
      name: "logout",
      mounted: async function() {
          return await this.$auth.logout();
        }
    }
</script>

<style scoped>

</style>
