import axios from 'axios';

export default {
  namespaced: true,
  state: {
    data: null
  },
  getters: {
    data(state) {
      if (!state.data) return null;
      return state.data.default;
    }
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    }
  },
  actions: {
    async fetchData({ commit }) {
      const res = await axios.get('/api/jailsbans/week');
      commit('setData', res.data);
    }
  }
};
