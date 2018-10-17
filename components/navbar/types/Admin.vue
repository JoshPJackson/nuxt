<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">Administrator Dashboard</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="mx-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        </b-nav-form>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/dashboard">Dashboard</b-nav-item>
        <b-nav-item href="/users">Users</b-nav-item>
        <b-nav-item href="/photos">Photos</b-nav-item>
        <b-nav-item href="/galleries">Galleries</b-nav-item>
        <b-nav-item href="/albums">Albums</b-nav-item>
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <i class="fa fa-user-circle"></i>
          </template>
          <b-dropdown-item href="/profile">Profile</b-dropdown-item>
          <b-dropdown-item href="/logout">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
    export default {
        name: "Admin"
    }
</script>

<style scoped>
  .fa-user-circle {
    font-size: 1.5rem;
  }
</style>
