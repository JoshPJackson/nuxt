<template>
  <div>
    <b-row>
      <b-col>
        <h2>API Tester</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card class="shadow">
          <b-form inline>
            <b-container fluid>
              <b-row>
                <b-col cols="3">
                  <label class="sr-only" for="method">Method</label>
                  <b-form-select
                    class="mb-2 mr-sm-2 mb-sm-0 w-100"
                    v-model="request.method"
                    :options="['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE', 'HEAD']"
                    id="method">
                    <option slot="first" value="">Method</option>
                  </b-form-select>
                </b-col>
                <b-col>
                  <b-input
                    class="mb-2 mr-sm-2 mb-sm-0 w-100"
                    id="url"
                    placeholder="url"
                    v-model="request.url"/>
                </b-col>
                <b-col cols="1">
                  <b-button variant="primary" @click="run()" class="float-right w-100">Send</b-button>
                </b-col>
              </b-row>
            </b-container>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col cols="6" xs="12" lg="6">
        <h3>Request</h3>
        <b-card class="shadow h-100 mb-4">
          <b-container fluid>
            <b-row class="pb-2">
              <b-col>
                <h4>Body</h4>
                <textarea id="body" class="border w-100 text-monospace" rows="10" v-model="request.body">
                </textarea>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h4>Headers</h4>
                <textarea id="headers" class="border w-100 text-monospace" rows="10">{{ request.headers }}</textarea>
              </b-col>
            </b-row>

          </b-container>
        </b-card>
      </b-col>
      <b-col cols="6" xs="12" lg="6">
        <h3>Response</h3>
        <b-card class="shadow h-100">
          <b-container fluid>
            <b-row class="pb-2">
              <b-col>
                <h4>Body</h4>
                <textarea id="response-body" class="border w-100 text-monospace" rows="10">{{ response.body }}</textarea>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h4>Headers</h4>
                <textarea id="response-headers" class="border w-100 text-monospace" rows="10">{{ JSON.stringify(response.headers) }}</textarea>
              </b-col>
            </b-row>
          </b-container>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "api-tester",
    data() {
      return {
        request: {
          method: 'GET',
          url: '',
          data: '',
          headers: this.$axios.defaults.headers.common,
          baseURL: 'http://users:8000/api/'
        },
        response: {
          body: '',
          headers: ''
        }
      }
    },
    methods: {
      async run() {
        let response = await this.$axios.$request(this.request)
        this.response.headers = JSON.stringify(response.headers, null, 2);
        this.response.body = JSON.stringify(response, null, 2);
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/vars/_variables.scss';

#headers {
  font-size: $font-size-xs;
}

textarea {
  height: 250px;
}

</style>
