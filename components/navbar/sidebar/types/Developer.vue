<template>
  <SidebarContainer v-click-outside="hideSidebar" :show="this.$store.state.showSidebar">
    <div class="hr mx-3"></div>
    <item href="/" icon-class="fa fa-chart-pie" @click.native="hideSidebar">Dashboard</item>
    <item href="/api-tester" icon-class="fa fa-envelope" @click.native="hideSidebar">API Tester</item>
    <item href="/users" icon-class="fa fa-users" @click.native="hideSidebar">Users</item>
    <item href="/messages" icon-class="fa fa-comment" @click.native="hideSidebar">Messages</item>
    <item href="/bookings" icon-class="fa fa-ticket" @click.native="hideSidebar">Bookings</item>
    <item href="/photos" icon-class="fa fa-photo" @click.native="hideSidebar">Photos</item>
    <item href="/galleries" icon-class="fa fa-book" @click.native="hideSidebar">Galleries</item>
    <item href="/shops" icon-class="fa fa-shopping-bag" @click.native="hideSidebar">Shops</item>
    <item href="/profile" icon-class="fa fa-user" @click.native="hideSidebar">Profile</item>
    <item href="/account" icon-class="fa fa-address-card-o" @click.native="hideSidebar">Account</item>
    <item href="/logout" icon-class="fa fa-logout" @click.native="hideSidebar">Sign out</item>
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

        if(!clickedElement.classList.contains('sidebar-toggle') && this.$store.getters['sidebarShowing']) {
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
