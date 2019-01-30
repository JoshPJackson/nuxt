<template>
  <b-container fluid>
    <b-row>
      <b-col cols="3">
        <label :for="name">{{ label }}</label>
      </b-col>
      <b-col cols="9">
        <b-form-input v-model="value" :id="name" type="email" class="mb-2" @change="update" :placeholder="label"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "EmailInput",
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
        this.value = newVal;
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
