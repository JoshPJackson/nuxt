<template>
  <SidebarContainer :show="$store.state.showSidebar">
    <div class="hr mx-3"></div>
    <item href="/" icon-class="fa fa-chart-pie" :active="true">Dashboard</item>
    <item href="/users" icon-class="fa fa-users">Users</item>
    <item href="/messages" icon-class="fa fa-comment">Messages</item>
    <item href="/bookings" icon-class="fa fa-ticket">Bookings</item>
    <item href="/photos" icon-class="fa fa-camera">Photos</item>
    <item href="/galleries" icon-class="fa fa-images">Galleries</item>
    <item href="/shops" icon-class="fa fa-shopping-bag">Shops</item>
    <item href="/profile" icon-class="fa fa-user">Profile</item>
  </SidebarContainer>
</template>

<script>
  import SidebarContainer from "../SidebarContainer";
  import Item from "../item";

  export default {
      name: "DeveloperSidebar",
    components: {Item, SidebarContainer}
  }
</script>

<style scoped>

</style>
