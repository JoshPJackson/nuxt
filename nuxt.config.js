const pkg = require('./package');

module.exports = {
  mode: 'spa',

  dev: true,
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'h-100'
    },
    htmlAttrs: {
      class: 'h-100'
    }
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/myapp.css',
    '@/assets/vars/_variables.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-notifications',
    '~/plugins/vue2-sidebar',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', {css: false}],
    // Doc: https://auth.nuxtjs.org/getting-starterd/setup
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    '@nuxtjs/font-awesome',
    'nuxt-validate',
    'voca',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      './assets/vars/_colors.scss'
    ]
  },


  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'http://users:8000',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    },

  },

  /*
  ** Auth module configuration
  */
  auth: {
    strategies: {
      password_grant: {
        _scheme: 'local',
        endpoints: {
          login: {
            url: '/oauth/token',
            method: 'post',
            propertyName: 'access_token'
          },
          logout: 'api/logout',
          user: {
            url: 'api/user',
            method: 'get',
            propertyName: false
          },
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    },
    redirect: {
      login: "/account/login",
      logout: "/",
      callback: "/account/login",
      user: "user/"
    },
  },

  /*
  ** Toast configuration
  */
  toast: {
    position: 'top-right',
    duration: 2000
  },


  loading: {
    name: 'chasing-dots',
    color: '#8a2be0',
    background: 'white',
    height: '4px'
  },

  /*
  ** Router configuration
  */
  router: {
    middleware: ['auth']
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
};
