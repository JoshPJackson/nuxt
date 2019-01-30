<template>
  <b-card title="Your Details">
    <b-form>
      <TextInput @updated="updateFirstName" label="First name" name="updated.first_name" :src-value="updated.first_name"/>
      <TextInput @updated="updateLastName" label="Last name" name="updated.last_name" :src-value="updated.last_name"/>
      <TextInput @updated="updateEmail" label="Email" name="email" :src-value="updated.email"/>
      <TextInput @updated="updatePhone" label="Phone" name="phone" :src-value="updated.phone"/>
    </b-form>
  </b-card>
</template>

<script>
  import TextInput from "../../forms/TextInput";
  export default {
    name: "YourDetails",
    components: {TextInput},
    data() {
      return {
        original: {
          first_name: null,
          last_name: null,
          email: null,
          phone: null,
        },
        updated: {
          first_name: null,
          last_name: null,
          email: null,
          phone: null,
        }
      }
    },
    mounted() {
      let user = this.$auth.user;

      this.original = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone
      };

      this.updated = {...this.original};
    },
    methods: {
      updateFirstName(val) {
        update('first_name', val);
      },

      updateLastName(val) {
        update('last_name', val);
      },

      updateEmail(val) {
        update('email', val);
      },

      updatePhone(val) {
        update('phone', val);
      },

      update(field, value) {
        this.updated[field] = value;
      }
    }
  }
</script>

<style scoped>

</style>
