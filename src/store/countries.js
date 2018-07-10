import axios from 'axios';

export default {
  namespaced: true,
  state: {
    data: null
  },
  getters: {
    data(state) {
      if (!state.data) return null;
      return state.data.default.reduce((map, val, idx) => {
        map[state.data.labels[idx][0]] = val;
        return map;
      }, {});
    }
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    }
  },
  actions: {
    async fetchData({ commit }) {
      const res = await axios.get('/api/chart/data/pie');
      commit('setData', res.data);
    }
  }
};
