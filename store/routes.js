export const routes = {
  namespaced: true,

  state: {
    all: null
  },
  getters: {
    getAll(state) {
      return state.all;
    }
  },
  mutations: {
    setAll(state, data) {
      state.all = data;
    },
    clearAll(state, data) {
      state.all = null;
    }
  },
  actions: {
    async getAll({
     commit,
     dispatch,
     getters,
     rootGetters,
     rootState,
     state
    }) {
      if (getters['getAll'] === null) {
        let routes = await this.$axios.get('api/routes');
        await commit('setAll', routes.data);
      }
    },

    async clearAll({
      commit,
      dispatch,
      getters,
      rootGetters,
      rootState,
      state
    }) {
      await commit('clearAll');
    }
  }
}
