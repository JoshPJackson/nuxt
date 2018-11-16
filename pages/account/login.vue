<template>
  <b-container id="login-container" fluid>
    <b-row class="h-100">
      <b-col class="d-flex justify-content-end">
        <b-form class="align-self-center p-5" id="form">
          <img src="/logo.png" id="logo">
          <div id="form-div">
            <span id="span-1">Welcome back! Please login to your account:</span>
            <b-form-group id="username-group"
                          label-for="username"
            >
              <b-form-input id="username"
                            type="email"
                            v-model="user.username"
                            :required="true"
                            placeholder="username">
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
            <b-container id="second-form-row">
              <b-row class="no-gutters clearfix">
                <b-col class="float-left">
                  <b-form-checkbox id="remember-me"
                                   v-model="rememberMe"
                                   value="accepted"
                                   unchecked-value="not_accepted">
                    <span id="remember-me-label">
                    Remember me
                  </span>
                  </b-form-checkbox>

                </b-col>
                <b-col class="float-right align-content-end">
                  <nuxt-link to="/account/reset-password" id="forgot-password-link" class="float-right">Forgot your password?</nuxt-link>
                </b-col>
              </b-row>
            </b-container>
            <b-button type="submit" variant="primary" class="float-right" @click.prevent="login">Sign In</b-button>
            <nuxt-link to="/account/create" class="btn btn-outline-primary">Create Account</nuxt-link>
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
        user: {
          username: "",
          password: "",
          rememberMe: true
        }
      };
    },
    methods: {
      async login() {

        if (!this.user.username) {
          this.$toast.error('OOPS! You forgot to put your username in');
          return;
        }

        if (!this.user.password) {
          this.$toast.error('OOPS! You forgot to put your password in!');
          return;
        }

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

#second-form-row {
  margin-top:30px;
  margin-bottom:30px;
  font-size: 12px;
  padding-left: 0;
  padding-right: 0;
}

#forgot-password-link {
  text-align: right;
  color: #551a8b;
}

#remember-me-label {
  line-height: 25px;
  display: block;
  color: #551a8b;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #551a8b;
  opacity: 1; /* Firefox */
}
</style>
