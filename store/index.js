import Vuex from 'vuex'
import { Database } from '@vuex-orm/core'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'

// module imports
import UserStateModule from './modules/userstate'
import UserTypeModule from './modules/usertype'
import { metrics } from './metrics.js'

// model imports
import UserState from '~/models/userstate'
import UserType from '~/models/usertype'
import nuxt from "../.nuxt/components/nuxt";

const database = new Database();

// associate models and modules
database.register(UserState, UserStateModule);
database.register(UserType, UserTypeModule);

VuexORM.use(VuexORMAxios, {
  database,
  http: {
    baseURL: 'http://users:8000/api',
    access_token: localStorage.getItem('auth._token.password_grant').replace('Bearer ','')
  }
});

const createStore = () => {
  return new Vuex.Store({
    plugins: [VuexORM.install(database)],
    modules: {
      metrics: metrics
    },
    state: () => ({
      showSidebar: false
    }),
    mutations: {
      toggleSidebar (state) {
        state.showSidebar = !state.showSidebar;
      },
      hideSidebar (state) {
        state.showSidebar = false;
      },
      showSidebar (state) {
        state.showSidebar = true;
      }
    }
  })
};

export default createStore
