<template>
  <vue2-sidebar
    :heading="heading"
    :links="links"
  >
  <router-view></router-view>
  </vue2-sidebar>
</template>

<script>
    import Vue2Sidebar from 'vue2-sidebar';

    export default {
      name: "Developer",
      components: {
        'vue2-sidebar': Vue2Sidebar
      },
      data() {
        return {
            heading: 'heading string',
            links: [{
              label: 'Home', href: '/', links: [
                {label: 'Home #1', href: '/home1'}
            ]}],
          }
      },
      mounted: function() {
        this.toggleSidebar();
      }
    }
</script>

<style scoped>

</style>
