import axios from 'axios';

export default {
  namespaced: true,
  state: {
    data: null
  },
  getters: {
    data(state) {
      if (!state.data) return null;
      return state.data.dataset;
    }
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    }
  },
  actions: {
    async fetchData({ commit }) {
      const res = await axios.get('/api/servers/month');
      commit('setData', res.data);
    }
  }
};
