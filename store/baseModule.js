export const BaseModule = {
  namespaced: true,

  getters: {
    endpoint(state) {
      return state.endpoint;
    },

    all(state) {
      return state.all;
    }
  },

  mutations: {
    all(state, data) {
      data.forEach(function (element) {
        state.all[element.id] = element;
      });
    },

    add(state, data) {
      state.all[data.id] = data;
    },

    remove(state, id) {
      state.all[id] = undefined;
    },

    clear(state) {
      state.all = [];
    }
  },

  actions: {

    async getAll({commit, getters}) {
      let endpoint = getters['endpoint'];
      let response = await this.$axios.get(endpoint);

      if (response.status == 200) {
        commit('all', response.data);
        return response.data;
      }

      return false;
    },

    async get({commit, getters, state}, id) {
      if (state.all[id] === undefined) {
        let endpoint = getters['endpoint'] + '/' + id;
        let response = await this.$axios.get(endpoint);

        if (response.status == 200) {
          commit('add', response.data);
          return response.data;
        } else {
          return false;
        }
      }

      return state.all[id];
    },

    async update({commit, getters}, data) {
      let endpoint = getters['endpoint'] + '/' + data.id;
      let response = await this.$axios.put(endpoint, data);

      if (response.status == 200) {
        commit('update', response.data);
        return true;
      }

      return false;
    },

    async create({commit, getters}, data) {
      let endpoint = getters['endpoint'];
      let response = await this.$axios.put(endpoint, data);

      if (response.status == 201) {
        commit('add', response.data);
        return true;
      }

      return false;
    },

    async delete({commit, getters}, id) {
      let endpoint = getters['endpoint'] + '/' + id;
      let response = await this.$axios.delete(endpoint);

      if (response.status == 200) {
        commit('remove', id);
        return true;
      }

      return false;
    }
  }
};
