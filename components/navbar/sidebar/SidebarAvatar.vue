<template>
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
</template>

<script>
    export default {
        name: "SidebarAvatar"
    }
</script>

<style scoped>
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
</style>
