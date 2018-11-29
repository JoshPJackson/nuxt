<template>
  <SidebarContainer :show="$store.state.showSidebar">
    <div class="hr mx-3"></div>
    <item href="/" icon-class="fa fa-chart-pie" :active="true">Dashboard</item>
    <item href="/messages" icon-class="fa fa-comment">Messages</item>
    <item href="/clients" icon-class="fa fa-users">Clients</item>
    <item href="/bookings" icon-class="fa fa-ticket">Bookings</item>
    <item href="/photos" icon-class="fa fa-camera">Photos</item>
    <item href="/galleries" icon-class="fa fa-images">Gallery</item>
    <item href="/shop" icon-class="fa fa-shopping-bag">Shop</item>
    <item href="/profile" icon-class="fa fa-user">Profile</item>
  </SidebarContainer>
</template>

<script>
  import Item from "../sidebar/item";
  import SidebarContainer from "../sidebar/SidebarContainer";

  export default {
      name: "PhotographerSidebar"
  }
</script>

<style scoped>

</style>
