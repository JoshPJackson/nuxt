<template>
  <b-container id="login-container" fluid>
    <b-row class="h-100">
      <b-col class="d-flex justify-content-end">
        <b-form class="align-self-center p-5" id="form">
          <img src="/logo.png" id="logo">
          <div id="form-div">
            <input type="hidden" name="token" :value="token">
            <span id="span-1">Forgot your password? No problem, just enter your new password below:</span>
            <b-form-group id="password-group" label-for="password">
              <b-form-input id="password"
                            type="password"
                            v-model="password"
                            :required="true"
                            placeholder="what's your new password?">
              </b-form-input>
            </b-form-group>
            <b-form-group id="confirm-password-group" label-for="confirm-password">
              <b-form-input id="confirmPassword"
                            type="password"
                            v-model="confirmPassword"
                            :required="true"
                            placeholder="confirm your new password?">
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" class="float-right" @click.prevent="reset">Reset</b-button>
          </div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
      name: "token",
      auth: false,
      data() {
        return {
          password: '',
          confirmPassword: '',
          token: '',
          email: ''
        }
      },
      async mounted() {

        let tokenEmailArray = this.$route.params.token.split('-');
        this.email = tokenEmailArray.pop();
        this.token = tokenEmailArray.join('-');

        await this.tokenIsValid();
      },
      methods: {
        reset() {
          if (this.dataIsValid()) {
            this.$axios.post('/api/users/reset-password', {
              'password' : this.password,
              'token' : this.token,
              'email' : this.email
            })
              .then(() => {
                this.$toast.success('Your password has been reset. You can now login');
                this.$router.replace('/account/login');
              })
              .catch((error) => {
                this.$toast.error(error.message);
              });
          } else {
            this.$toast.error('You forgot to tell us your new password!');
            return false;
          }
        },

        dataIsValid() {
          return this.password && this.confirmPassword && this.token && this.password === this.confirmPassword;
        },

        async tokenIsValid() {
          return await this.$axios.post('/api/users/reset-password/validate', {
            'token' : this.token,
            'email' : this.email
          }).then(() => {
            return true;
          }).catch((e) => {
            this.$router.replace('/404.html');
          });
        }
      },
    }
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
