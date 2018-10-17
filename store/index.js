import Vuex from 'vuex'
import { Database } from '@vuex-orm/core'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import UserStateModule from './modules/userstate'
import UserTypeModule from './modules/usertype'
import UserState from '~/models/userstate'
import UserType from '~/models/usertype'

const database = new Database();

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
})

const createStore = () => {
  return new Vuex.Store({
    plugins: [VuexORM.install(database)],
    state: () => ({
      counter: 0
    }),
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
};

export default createStore
