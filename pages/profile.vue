<template>
  <b-container fluid>
    <b-row class="mt-4">
      <b-col
        xs="12"
        md="6"
        lg="4"
        order-md="2"
      >
        <div id="profile-picture-container">
        <div id="profile-picture">
        </div>
        </div>
      </b-col>
      <b-col>
        <b-card
          bg-variant="light"
          text-variant="dark"
          title="Account Details">

          <b-row class="my-1">
            <b-col sm="2" align-self="center">
              <label for="firstName">First name:</label>
            </b-col>
            <b-col sm="10">
              <b-input-group>
                <b-input-group-text
                  slot="append"
                  @click="editField('firstName')">
                  <i class="fa fa-edit"></i>
                </b-input-group-text>
                <b-form-input
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  v-model="accountDetails.user.firstName"
                  readonly/>
              </b-input-group>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="2" align-self="center">
              <label for="lastName">Last name:</label>
            </b-col>
            <b-col sm="10">
              <b-input-group>
                <b-input-group-text
                  slot="append"
                  @click="editField('lastName')">
                  <i class="fa fa-edit"></i>
                </b-input-group-text>
                <b-form-input
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  v-model="accountDetails.user.lastName"
                  readonly/>
              </b-input-group>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="2" align-self="center">
              <label for="email">Email:</label>
            </b-col>
            <b-col sm="10">
              <b-input-group>
                <b-input-group-text
                  slot="append"
                  @click="editField('email')">
                  <i class="fa fa-edit"></i>
                </b-input-group-text>
                <b-form-input
                  id="email"
                  name="email"
                  placeholder="Email"
                  v-model="accountDetails.user.email"
                  readonly/>
              </b-input-group>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: "profile",
        data() {
          return {
            accountDetails: {
              user: {
                id: null,
                firstName: null,
                lastName: null,
                email: null
              }
            },
          }
        },
        methods: {
          editField(field) {
            // if readonly, make editable and add save and cancel buttons
          },

          getUser() {
            Object.assign(this.accountDetails.user, this.$auth.user);
          }
        },
        mounted() {
          this.getUser();
        }
    }
</script>

<style scoped>
  #profile-picture-container {
    width: 100%;
    padding-bottom: 100%;
    position: relative;
  }

  #profile-picture {
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;

    color: white;
    font-size: 24px;
    text-align: center;
    background-image: url('https://picsum.photos/900/250/?image=3');
    background-position: center center;
    background-size: cover;
    border-radius: 50%;
  }
</style>
