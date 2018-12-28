<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h2>My Account</h2>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col cols="6" xs="12">
        <b-card title="Your Details">
          <b-form>
            <b-container fluid>
              <b-row>
                <b-col cols="3">
                  <label for="first_name">First name:</label>
                </b-col>
                <b-col cols="9">
                  <b-form-input
                    v-model="accountDetails.user.first_name"
                    id="first_name"
                    type="text"
                    class="mb-2"
                    placeholder="First name"></b-form-input>
                </b-col>
              </b-row>
            </b-container>
            <b-container fluid>
              <b-row>
                <b-col cols="3">
                  <label for="last_name">Last name:</label>
                </b-col>
                <b-col cols="9">
                  <b-form-input
                    v-model="accountDetails.user.last_name"
                    type="text"
                    id="last_name"
                    class="mb-2"
                    placeholder="Last name"></b-form-input>
                </b-col>
              </b-row>
            </b-container>
            <b-container fluid>
              <b-row>
                <b-col cols="3">
                  <label for="email">Email:</label>
                </b-col>
                <b-col cols="9">
                  <b-form-input
                    v-model="accountDetails.user.email"
                    type="email"
                    id="email"
                    class="mb-2"
                    placeholder="Email address"></b-form-input>
                </b-col>
              </b-row>
            </b-container>
            <b-container fluid>
              <b-row>
                <b-col cols="3">
                  <label for="phone">Phone</label>
                </b-col>
                <b-col cols="9">
                  <b-form-input
                    v-model="accountDetails.user.phone"
                    type="tel"
                    id="phone"
                    class="mb-2"
                    placeholder="Phone number"></b-form-input>
                </b-col>
              </b-row>
            </b-container>
          </b-form>
        </b-card>
      </b-col>
      <b-col cols="6" xs="12">
        <b-card title="Communication Preferences">
          <b-form>
            <p>We will only contact you via these methods regarding your account. This will <strong>NOT</strong> be used for marketing.</p>
            <b-form-checkbox id="comm_pref_message"
                             v-model="accountDetails.user.comm_pref.message"
                             value="1"
                             unchecked-value="0">
              Message
            </b-form-checkbox><br>
            <b-form-checkbox id="comm_pref_email"
                             v-model="accountDetails.user.comm_pref.email"
                             value="1"
                             unchecked-value="0">
              Email
            </b-form-checkbox><br>
            <b-form-checkbox id="comm_pref_phone"
                             v-model="accountDetails.user.comm_pref.phone"
                             value="1"
                             unchecked-value="0">
              Phone
            </b-form-checkbox><br>
            <b-form-checkbox id="comm_pref_post"
                             v-model="accountDetails.user.comm_pref.post"
                             value="1"
                             unchecked-value="0">
              Post
            </b-form-checkbox>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col cols="6" xs="12">
        <b-card title="Membership Status">
          <p>It seems like you're not yet a member. Shall we fix that?</p>
        </b-card>
        <b-card title="Account Status" class="mt-2">
          <p>Your account is currently live</p>
        </b-card>
      </b-col>
      <b-col cols="6" xs="12">
        <b-card title="Marketing Preferences">
          <b-form>
            <p>We would occasionally like to tell you about things we think would be of interest to you including how you can get more out of Your Wedding Photographer. You can opt out at any time. Please tick which methods you want to receive information on:</p>
            <b-form-checkbox id="comm_pref_message"
                             v-model="accountDetails.user.mark_pref.message"
                             value="1"
                             unchecked-value="0">
              Message
            </b-form-checkbox><br>
            <b-form-checkbox id="comm_pref_email"
                             v-model="accountDetails.user.mark_pref.email"
                             value="1"
                             unchecked-value="0">
              Email
            </b-form-checkbox><br>
            <b-form-checkbox id="comm_pref_phone"
                             v-model="accountDetails.user.mark_pref.phone"
                             value="1"
                             unchecked-value="0">
              Phone
            </b-form-checkbox><br>
            <b-form-checkbox id="comm_pref_post"
                             v-model="accountDetails.user.mark_pref.post"
                             value="1"
                             unchecked-value="0">
              Post
            </b-form-checkbox>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col cols="6" xs="12">
        <b-card title="Payment Details">
        </b-card>
      </b-col>
      <b-col cols="6" xs="12">
        <b-card title="Invoices">
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col cols="6" xs="12">
        <b-card title="Support Messages">

        </b-card>
        <b-card title="Communication History" class="mt-2">

        </b-card>
      </b-col>
      <b-col cols="6" xs="12">
        <b-card title="Marketing History">

        </b-card>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        accountDetails: {
          user: {
            id: null,
            first_name: null,
            last_name: null,
            email: null,
            phone: null,
            state: null,
            comm_pref: {
              message: 0,
              phone: 0,
              email: 0,
              post: 0
            },
            mark_pref: {
              message: 0,
              phone: 0,
              email: 0,
              post: 0
            },
            membership: {
              status: null,
            },
            payment: {
              card_number: 'XXXX XXXX XXXX 1234',
              expiry_date_month: null,
              expiry_date_year: null,
              cvv: null,
              billing_address: {
                line_1: null,
                line_2: null,
                line_3: null,
                line_4: null,
                postcode: null
              }
            },

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

</style>
