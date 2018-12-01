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

const database = new Database();

// associate models and modules
database.register(UserState, UserStateModule);
database.register(UserType, UserTypeModule);

VuexORM.use(VuexORMAxios, {
  database,
  http: {
    baseURL: 'http://users:8000/api',
    url: '/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
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
      }
    }
  })
};

export default createStore
