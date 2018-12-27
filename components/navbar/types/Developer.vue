<template>
  <div>
    <b-navbar id="developer-navbar" toggleable="md" type="dark" variant="primary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <button class="btn btn-link sidebar-toggle" @click="toggleSidebar"><i class="sidebar-toggle fa fa-bars"></i></button>
      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="mr-auto">

          <b-nav-form>
            <b-form-input id="search" size="md" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="md" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-navbar-brand href="#"><img src="/acronym-white.png" id="brand-image"></b-navbar-brand>
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <i class="fa fa-user"></i>
            </template>
            <b-dropdown-item href="#">My Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <DeveloperSidebar/>
  </div>
</template>

<script>
  import DeveloperSidebar from "../sidebar/types/Developer";

  export default {
    name: "DeveloperNavbar",
    components: {DeveloperSidebar},
    methods: {
      toggleSidebar() {
        this.$store.commit('toggleSidebar');
      }
    }
  }
</script>

<style lang="scss"scoped>
@import '@/assets/vars/_variables.scss';

#developer-navbar {
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 8px 6px -6px #999;
}

#search {
  width: 500px;
}

.fa-bars, .fa-user {
  font-size: $h2-font-size;
  color: white;
}

.fa-bars:hover, .fa-user:hover {
  color: theme-color('secondary');
}

#brand-image {
  height:35px;
}
</style>
