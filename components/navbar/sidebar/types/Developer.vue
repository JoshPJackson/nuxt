<template>
  <SidebarContainer v-click-outside="hideSidebar" :show="this.$store.state.showSidebar">
    <div class="hr mx-3"></div>
    <item href="/" icon-class="fa fa-chart-pie" @click="hideSidebar">Dashboard</item>
    <item href="/api-tester" icon-class="fa fa-envelope">API Tester</item>
    <item href="/users" icon-class="fa fa-users" @click="hideSidebar">Users</item>
    <item href="/messages" icon-class="fa fa-comment" v-on:click.prevent="hideSidebar">Messages</item>
    <item href="/bookings" icon-class="fa fa-ticket">Bookings</item>
    <item href="/photos" icon-class="fa fa-photo">Photos</item>
    <item href="/galleries" icon-class="fa fa-book">Galleries</item>
    <item href="/shops" icon-class="fa fa-shopping-bag">Shops</item>
    <item href="/profile" icon-class="fa fa-user">Profile</item>
    <item href="/logout" icon-class="fa fa-logout">Sign out</item>
  </SidebarContainer>
</template>

<script>
  import SidebarContainer from "../SidebarContainer";
  import Item from "../item";
  import ClickOutside from 'vue-click-outside'

  export default {
    name: "DeveloperSidebar",
    components: {Item, SidebarContainer},
    methods: {
      hideSidebar(event) {

        let clickedElement = event.srcElement;

        if(!clickedElement.classList.contains('sidebar-toggle')) {
          this.$store.commit('hideSidebar');
        }
      },
    },
    directives: {
      ClickOutside
    }
  }
</script>

<style scoped>

</style>
