import Vuex from 'vuex'
import { Database } from '@vuex-orm/core'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'

// module imports
import UserStateModule from './modules/userstate'
import UserTypeModule from './modules/usertype'
import AddressModule from './modules/address'
import CommunicationPreferenceModule from './modules/communication-preference'
import CommunicationPreferenceHistoryModule from './modules/communication-preference-history'
import MarketingPreferenceModule from './modules/marketing-preference'
import MarketingPreferenceHistoryModule from './modules/marketing-preference-history'
import MembershipModule from './modules/membership'
import { metrics } from './metrics.js'
import { routes } from './routes.js'

// model imports
import UserState from '~/models/userstate'
import UserType from '~/models/usertype'
import Address from '~/models/address'
import CommunicationPreference from '~/models/communication-preference'
import CommunicationPreferenceHistory from '~/models/communication-preference-history'
import MarketingPreference from '~/models/marketing-preference'
import MarketingPreferenceHistory from '~/models/marketing-preference-history'
import Membership from '~/models/membership'
import nuxt from "../.nuxt/components/nuxt";

const database = new Database();

// associate models and modules
database.register(UserState, UserStateModule);
database.register(UserType, UserTypeModule);
database.register(Address, AddressModule);
database.register(CommunicationPreference, CommunicationPreferenceModule);
database.register(CommunicationPreferenceHistory, CommunicationPreferenceHistoryModule);
database.register(MarketingPreference, MarketingPreferenceModule);
database.register(MarketingPreferenceHistory, MarketingPreferenceHistoryModule);
database.register(Membership, MembershipModule);

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
      metrics: metrics,
      routes: routes
    },
    state: () => ({
      showSidebar: false
    }),
    getters: {
      sidebarShowing (state) {
        return state.showSidebar;
      }
    },
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
