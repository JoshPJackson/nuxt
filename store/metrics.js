export const metrics = {
  namespaced: true,
  state: {
    usersCountByState: {}
  },
  getters: {
    usersCountByState(state) {
      return state.usersCountByState;
    }
  },
  mutations: {
    setUsersCountByStateData (state, data) {
      state.usersCountByState = data;
    }
  },
  actions: {
    async setUserCountByStateData (context, data) {
      await context.commit('setUsersCountByStateData', data);
    }
  }
}
