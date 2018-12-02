import UserState from '../models/userstate'

export const metrics = {
  namespaced: true,

  state: {
    userCountByState: {},
    userCount: 0
  },

  getters: {
    userCountByState(state) {
      return state.userCountByState;
    },

    userCount(state) {
      return state.userCount;
    }
  },
  mutations: {
    setUserCountByStateData(state, data) {
      state.userCountByState = data;
    },

    setUserCount(state, data) {
      state.userCount = data;
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
    }) {
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
    }
  }
}
