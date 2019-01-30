<template>
  <b-container fluid>
    <b-row>
      <b-col cols="3">
        <label :for="name">{{ label }}</label>
      </b-col>
      <b-col cols="9">
        <b-form-checkbox :id="name" v-model="value"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "CheckboxInput",
    props: [
      'label',
      'name',
      'srcValue'
    ],
    data() {
      return {
        value: null
      }
    },
    watch: {
      srcValue(newVal) {
        this.value = Boolean(newVal);
      }
    },
    methods: {
      update() {
        this.$emit('updated', this.value);
      }
    }
  }
</script>

<style scoped>

</style>
