<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="fa fa-bars text-white px-3" @click.prevent="toggleSidebar"></a>
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Sign out</a>
        </li>
      </ul>
    </nav>

    <b-container :class="['container-fluid', 'position-absolute', 'px-0', 'h-100', { 'd-none': showSidebar }]" fluid>
      <b-row class="h-100 px-0 mx-0">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar px-0">
          <div class="sidebar-sticky h-100">
            <ul class="nav flex-column">
              <b-container class="mt-5" fluid>
                <b-row class="no-gutters">
                  <b-col class="avatar mx-auto">
                    <img src="/avatar.jpg" class="d-block mx-auto">
                  </b-col>
                </b-row>
                <b-row>
                  <b-container class="px-0 text-center text-white mb-3" fluid>
                    <b-row class="no-gutters">
                      <b-col class="name text-center"><strong>Joshua Jackson</strong></b-col>
                    </b-row>
                    <b-row class="no-gutters">
                      <b-col class="position"><small><em>Developer</em></small></b-col>
                    </b-row>
                    <b-row class="no-gutters">
                      <b-col class="company">Your Wedding Photographer</b-col>
                    </b-row>
                  </b-container>
                </b-row>
              </b-container>
              <div class="hr mx-3"></div>
              <item href="/" icon-class="fa fa-chart-pie" :active="true">Dashboard</item>
              <item href="/messages" icon-class="fa fa-comment">Messages</item>
              <item href="/clients" icon-class="fa fa-users">Clients</item>
              <item href="/bookings" icon-class="fa fa-ticket">Bookings</item>
              <item href="/photos" icon-class="fa fa-camera">Photos</item>
              <item href="/galleries" icon-class="fa fa-images">Gallery</item>
              <item href="/shop" icon-class="fa fa-shopping-bag">Shop</item>
              <item href="/profile" icon-class="fa fa-user">Profile</item>
            </ul>
          </div>
        </nav>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Item from "../sidebar/item";
  export default {
    name: "Developer",
    components: {Item},
    data() {
      return {
        showSidebar: false
      }
    },
    methods: {
      toggleSidebar() {
        this.showSidebar = !this.showSidebar;
      }
    }
  }
</script>

<style scoped>
.sidebar-sticky {
  background-color: rgba(138, 43, 226, 1);
}

.sidebar {
  z-index: 1029;
}

.avatar {
  margin: 10px;
  max-width: 100px;
  border: 1px solid white;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  box-shadow: 1px 1px 4px 4px rgba(0, 0, 0, 1);
  -moz-box-shadow: 1px 1px 4px 4px rgba(255, 255, 255, 1);
  -webkit-box-shadow: 1px 1px 4px 4px rgba(255, 255, 255, 1);
}
.avatar img{
  position: relative;
  display: block;
  width: 100%;
  border-radius: 50%;
}

.hr {
  background-color: white;
  height: 1px;
}
</style>
