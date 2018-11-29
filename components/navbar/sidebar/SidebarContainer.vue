<template>
  <b-container :class="['container-fluid', 'position-absolute', 'px-0', 'h-100', { 'd-none': !show }]" fluid>
    <b-row class="h-100 px-0 mx-0">
      <nav class="col-md-2 d-none d-md-block bg-light sidebar px-0">
        <div class="sidebar-sticky h-100">
          <ul class="nav flex-column">
            <SidebarAvatar/>
            <slot></slot>
          </ul>
        </div>
      </nav>
    </b-row>
  </b-container>
</template>

<script>
    import SidebarAvatar from "./SidebarAvatar";
    export default {
      name: "SidebarContainer",
      components: {SidebarAvatar},
      props: ['show']
    }
</script>

<style scoped>
  .sidebar-sticky {
    background-color: rgba(138, 43, 226, 1);
  }

  .sidebar {
    z-index: 1029;
  }
</style>
