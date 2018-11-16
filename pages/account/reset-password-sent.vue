<template>
  <b-container id="login-container" fluid>
    <b-row class="h-100">
      <b-col class="d-flex justify-content-end">
        <b-form class="align-self-center p-5" id="form">
          <img src="/logo.png" id="logo">
          <b-jumbotron header="Check your email inbox" lead="We've sent you some instructions to reset your password. Don't worry, they're really easy to follow" >
            <p><small>If you have remebered your password you can just <nuxt-link to="/account/login">login</nuxt-link> as normal and ignore the password reset email we have sent you. If you need some help then get in touch with us</small></p>
            <b-btn variant="primary" href="#">Need help ?</b-btn>
          </b-jumbotron>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    auth: false,
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

  .jumbotron {
    background-color: transparent;
    padding: 0;
    margin-top: 30px;
  }

  .jumbotron>h1 {
    font-size: 32px;
  }

  #logo {
    max-width:100%;
    display:block;
  }

  small {
    color: #551a8b;
  }
</style>
