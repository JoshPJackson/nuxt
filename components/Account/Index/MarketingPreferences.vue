<template>
  <b-card title="Marketing Preferences">
    <b-form>
      <CheckboxInput @updated="updateEmail" label="Email" name="updated.email" :src-value="updated.email"/>
      <CheckboxInput @updated="updatePhone" label="Phone" name="updated.phone" :src-value="updated.phone"/>
      <CheckboxInput @updated="updatePost" label="Post" name="updated.post" :src-value="updated.post"/>
      <CheckboxInput @updated="updateMessage" label="Message" name="updated.message" :src-value="updated.message"/>
    </b-form>
  </b-card>
</template>

<script>
  import CheckboxInput from "../../forms/CheckboxInput";
  export default {
    name: "MarketingPreferences",
    components: {CheckboxInput},
    data() {
      return {
        original: {
          post: null,
          phone: null,
          email: null,
          message: null
        },
        updated: {
          post: null,
          phone: null,
          email: null,
          message: null
        }
      }
    },
    async mounted() {
      let comms = await this.$store.dispatch('marketing-preferences/get', this.$auth.user.marketing_preference_id);
      this.original = {
        post: comms.post,
        phone: comms.phone,
        email: comms.email,
        message: comms.message
      };

      this.updated = {...this.original};

      return;
    },
    methods: {
      updatePost(val) {
        this.update('post', val);
      },

      updatePhone(val) {
        this.update('phone', val);
      },

      updateEmail(val) {
        this.update('email', val);
      },

      updateMessage(val) {
        this.update('message', val);
      },

      update(field, value) {
        this.updated[field] = value;
      }
    }
  }
</script>

<style scoped>

</style>
