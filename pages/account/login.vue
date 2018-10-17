<template>
  <b-container id="login-container" fluid>
    <b-row class="h-100">
      <b-col class="d-flex justify-content-center">
        <b-form class="align-self-center p-5" id="form">
          <h2>Please sign in:</h2>
          <div>

            <b-form-group id="username-group"
                          label="Username"
                          label-for="username"
            >
              <b-form-input id="username"
                            type="email"
                            v-model="user.username"
                            required
                            placeholder="Enter email">
              </b-form-input>
            </b-form-group>

            <b-form-group id="password-group"
                          label="Password"
                          label-for="password"
            >
              <b-form-input id="password"
                            type="password"
                            v-model="user.password"
                            required
                            placeholder="Enter Password">
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" class="float-right" @click.prevent="login">Sign In</b-button>
            <b-button type="reset" variant="secondary">Create Account</b-button>
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
          password: ""
        }
      };
    },
    methods: {
      async login() {
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
            if (error.response.status === 401) {
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
  background-image: url("/pexels-photo-256737.jpeg");
  background-size: 100%;
  background-position: center center;
}

#form {
  width:500px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
}
</style>
