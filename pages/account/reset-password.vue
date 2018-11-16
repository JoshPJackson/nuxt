<template>
  <b-container id="login-container" fluid>
    <b-row class="h-100">
      <b-col class="d-flex justify-content-end">
        <b-form class="align-self-center p-5" id="form">
          <img src="/logo.png" id="logo">
          <div id="form-div">
            <ChromeAutocompleteHider element-to-hide-id="email"></ChromeAutocompleteHider>
            <span id="span-1">Forgot your password? No problem, we'll get you sorted out:</span>
            <b-form-group id="email-group" label-for="email">
              <b-form-input id="email"
                            type="email"
                            v-model="email"
                            :required="true"
                            placeholder="what's your email address?">
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" class="float-right" @click.prevent="reset">Reset</b-button>
            <nuxt-link to="/account/login" class="btn btn-outline-primary">Remember it now ?</nuxt-link>
          </div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    auth: false,
    data() {
      return {
        email: ''
      };
    },
    methods: {
      async reset() {
        if (!this.email) {
          this.$toast.error('Hang on, where are we sending the password reset email to?');
          return;
        }

        await this.$axios.post('api/user/reset-password/send-reset-email', {
          email: this.email
        }).then(() => {
          this.$router.replace("/account/reset-password-sent");
        }).catch((error) => {
          if (error.response) {
            if (error.response.status == 400) {
              this.$toast.error('Hey, you forgot to include your email!');
            } else {
              this.$toast.error('Sorry, something has gone wrong. We\'re looking into it.');
            }
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            this.$toast.error('Sorry, we couldn\'t do that. Please try again in a moment');
          } else {
            // Something happened in setting up the request that triggered an Error
            this.$toast.error('Sorry, we couldn\'t do that. Please try again in a moment');
          }
        });
      }
    }
  };
</script>

<style scoped>
  #login-container {
    background-image: url("/white roses.jpg");
    background-size: 100% auto;
    background-position: top left;
  }

  #form {
    width:500px;
  }

  #logo {
    max-width:100%;
    display:block;
  }

  #span-1 {
    text-align: center;
    width:100%;
    display:block;
    color: #999999;
    font-family: "Ubuntu";
    font-size: 12px;
    margin-bottom: 30px;
  }

  #form-div {
    padding-top:30px;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #551a8b;
    opacity: 1; /* Firefox */
  }
</style>
