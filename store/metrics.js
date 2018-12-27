import UserState from '../models/userstate'
import UserType from '../models/usertype'
import '@/functions/cacheHelpers'
import {isExpired} from "../functions/cacheHelpers";

export const metrics = {
  namespaced: true,

  state: {
    userCountByState: {},
    userCountByType: {},
    userCount: 0,
    imageCount: 0,
    cache: {
      userCountByState: {
        updatedAt: 0,
        refreshPeriod: 60000
      },
      userCountByType: {
        updatedAt: 0,
        refreshPeriod: 60000
      },
      userCount: {
        updatedAt: 0,
        refreshPeriod: 60000
      },
      imageCount: {
        updatedAt: 0,
        refreshPeriod: 60000
      }
    }
  },
  getters: {
    userCountByState(state) {
      return state.userCountByState;
    },

    userCountByType(state) {
      return state.userCountByType;
    },

    userCount(state) {
      return state.userCount;
    }
  },
  mutations: {
    setUserCountByStateData(state, data) {
      state.userCountByState = data;
      state.cache.userCountByState.updatedAt = (new Date).getTime();
    },

    setUserCountByTypeData(state, data) {
      state.userCountByType = data;
      state.cache.userCountByType.updatedAt = (new Date).getTime();
    },

    setUserCount(state, data) {
      state.userCount = data;
      state.cache.userCount.updatedAt;
    }
  },
  actions: {
    async setUserCountByStateData({
      commit,
      dispatch,
      getters,
      rootGetters,
      rootState,
      state
    }, params) {
      let force = false;
      let cache = state.cache.userCountByState;

      // params can contain a force property which will force a refresh
      // check if refresh is being forced
      if (params && params.hasOwnProperty('force') && params.force) {
        force = true;
      }

      // check if updated date is set and has passed

      if (force || isExpired(cache)) {
        // populate the user states store with all user states
        await UserState.$fetch();

        let split = await this.$axios.get('api/users/state/count')
          .then((response) => {
            return response.data;
          });

        let dataPoints = [];
        let dataLabels = [];

        for (var key in split) {
          dataPoints.push(split[key]);
          let userstate = await UserState.find(key);
          dataLabels.push(userstate.name);
        }

        await commit('setUserCountByStateData', {
          labels: dataLabels,
          datasets: [
            {
              label: 'my pie chart',
              data: dataPoints,
              backgroundColor: [
                'rgba(106, 167, 192, 0.2)',
                'rgba(106, 167, 192, 0.4)',
                'rgba(106, 167, 192, 0.6)',
                'rgba(106, 167, 192, 0.8)',
                'rgba(106, 167, 192, 1)'
              ]
            }
          ]
        });
      } else {
        console.debug('userCountByState data is valid until ' . getRefreshDate().toUTCString());
      }
    },

    async setUserCount({
      commit,
      dispatch,
      getters,
      rootGetters,
      rootState,
      state
    }) {
      let count = await this.$axios.get('api/users/count').then((response) => {
        return response.data
      });

      commit('setUserCount', count);
    },

    async setUserCountByTypeData({
                                    commit,
                                    dispatch,
                                    getters,
                                    rootGetters,
                                    rootState,
                                    state
                                  }) {
      await UserType.$fetch();

      let split = await this.$axios.get('api/users/type/count')
        .then((response) => {
          return response.data;
        });

      let dataPoints = [];
      let dataLabels = [];

      for (var key in split) {
        dataPoints.push(split[key]);
        let usertype = await UserType.find(key);
        dataLabels.push(usertype.name);
      }

      await commit('setUserCountByTypeData', {
        labels: dataLabels,
        datasets: [
          {
            label: 'my pie chart',
            data: dataPoints,
            backgroundColor: [
              'rgba(106, 167, 192, 0.2)',
              'rgba(106, 167, 192, 0.4)',
              'rgba(106, 167, 192, 0.6)',
              'rgba(106, 167, 192, 0.8)',
              'rgba(106, 167, 192, 1)'
            ]
          }
        ]
      });
    },
  }
}
