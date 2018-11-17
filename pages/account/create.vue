<template>
  <b-container id="login-container" fluid>
    <b-row class="h-100">
      <b-col class="d-flex justify-content-end">
        <b-form class="align-self-center p-5" id="form">
          <img src="/logo.png" id="logo">
          <div id="form-div">
            <span id="span-1">We're excited you're here! Create your new account below:</span>
            <b-form-group id="first-name">
              <b-form-input
                id="first-name"
                type="text"
                v-model="user.firstname"
                :required="true"
                placeholder="first name"/>
            </b-form-group>
            <b-form-group id="last-name">
              <b-form-input
                id="last-name"
                type="text"
                v-model="user.lastname"
                :required="true"
                placeholder="last name"/>
            </b-form-group>
            <b-form-group id="email-group">
              <b-form-input id="email"
                            type="email"
                            v-model="user.email"
                            :required="true"
                            placeholder="email address">
              </b-form-input>
            </b-form-group>
            <b-form-group id="password-group"
                          label-for="password"
            >
              <b-form-input id="password"
                            type="password"
                            v-model="user.password"
                            :required="true"
                            placeholder="password">
              </b-form-input>
            </b-form-group>
            <b-form-group id="password-confirm-group"
                          label-for="password-confirm"
            >
              <b-form-input id="password-confirm"
                            type="password"
                            v-model="user.passwordConfirm"
                            :required="true"
                            placeholder="confirm password">
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" class="float-right" @click.prevent="login">Create Account</b-button>
            <nuxt-link to="/account/login" class="btn btn-outline-primary">Got an account?</nuxt-link>
          </div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    auth: false,
    middleware: 'notauthed',
    data() {
      return {
        user: {
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          passwordConfirm: ''
        }
      };
    },
    methods: {
      async login() {

        if (!this.checkRequiredFields()) { return; }

        await this.$auth.loginWith("password_grant", {
          data: {
            username: this.user.username,
            password: this.user.password
          }
        }).then(() => {
          this.$toast.success('Welcome back ' + this.$auth.user.firstName);
          this.$router.replace("/");
        }).catch((error) => {
          if (error.response) {
            if (error.response.status == 401) {
              this.$toast.error('Sorry, we couldn\'t log you in. Please check your credentials');
            } else {
              this.$toast.error('Sorry, we couldn\'t log you in at the moment. Please try again in a moment');
            }
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            this.$toast.error('Sorry, we couldn\'t log you in at the moment. Please try again in a moment');
          } else {
            // Something happened in setting up the request that triggered an Error
            this.$toast.error('Sorry, we couldn\'t log you in at the moment. Please try again in a moment');
          }
        });
      },

      checkRequiredFields() {
        if (!this.user.username) {
          this.$toast.error('OOPS! You forgot to put your username in');
          return false;
        }

        if (!this.user.password) {
          this.$toast.error('OOPS! You forgot to put your password in!');
          return false;
        }

        return true;
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
