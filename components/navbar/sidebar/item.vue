<template>
  <li class="nav-item w-100 pl-4 my-1 font-weight-bold" @click.native="closeSidebar()">
    <nuxt-link :class="['text-white', {'active' : isActive() }]" :to="href">
      <span data-feather="file-text"></span>
      <i :class="iconClass"></i>
      <slot></slot>
    </nuxt-link>
  </li>
</template>

<script>
  export default {
    name: "item",
    props: [
      'href',
      'iconClass',
      'active'
    ],
    methods: {
      isActive() {
        return this.$router.currentRoute.fullPath === this.href;
      },
      closeSidebar() {
        this.$store.commit('hideSidebar');
      }
    }
  }
</script>

<style lang="scss" scoped>

@import "@/assets/vars/_variables.scss";

.nav-link {
  color: white;
}

.active {
  color: theme-color('secondary') !important;
}
</style>
