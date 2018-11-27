<template>
  <li :class="['nav-item', {'active': active }]">
    <nuxt-link class="nav-link" :to="href">
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
        ]
    }
</script>

<style scoped>
.nav-link {
  color: white;
}
</style>
