import Vuex from 'vuex'
import { metrics } from './metrics.js'
import { routes } from './routes.js'
import UserType from './usertype';
import UserState from './userstate';
import User from './user';
import UserMembership from './user-membership';
import Membership from './membership';
import MarketingPreferenceHistory from './marketing-preference-history';
import MarketingPreference from './marketing-preference';
import CommunicationPreferenceHistory from './communication-preference-history';
import CommunicationPreference from './communication-preference';
import Address from './address';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      metrics: metrics,
      routes: routes,
      usertypes: UserType,
      userstates: UserState,
      users: User,
      'user-memberships': UserMembership,
      memberships: Membership,
      'marketing-preferences': MarketingPreference,
      'marketing-preference-history': MarketingPreferenceHistory,
      'communication-preferences': CommunicationPreference,
      'communication-preference-history': CommunicationPreferenceHistory,
      addresses: Address

    },
    state: {
      showSidebar: false
    },
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
    },

    actions: {
      async get({
        state,
        rootState,
        getters,
        rootGetters,
        commit,
        dispatch
      }, {
        url
      }) {
        let response = await this.$axios.get(url);

        if (response.status === 200) {
          return response.data;
        }

        return false;
      },

      async create({
        state,
        rootState,
        getters,
        rootGetters,
        commit,
        dispatch
      }, {
        url,
        data
      }) {
        let response = await this.$axios.post(url, data);

        if (response.status == 201) {
          return response.data;
        }

        return false;
      },

      async update({
        state,
        rootState,
        getters,
        rootGetters,
        commit,
        dispatch
      }, {
        url,
        data
      }) {
        let response = await this.$axios.put(url, data);

        if (response.status == 200) {
          return response.data;
        }

        return false;
      },

      async delete({
        state,
        rootState,
        getters,
        rootGetters,
        commit,
        dispatch
      }, {
        url
      }) {
        let response = await this.$axios.delete(url);

        if (response.status == 200) {
          return response.data;
        }

        return false;
      }
    }
  })
};

export default createStore
