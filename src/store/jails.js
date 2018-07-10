import axios from 'axios';

export default {
  namespaced: true,
  state: {
    data: null
  },
  getters: {
    data(state) {
      if (!state.data) return null;
      return state.data.labels.reduce((map, label, idx) => {
        map[label] = state.data.default[idx][0];
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
      const res = await axios.get('/api/chart/data/jailsbans');
      commit('setData', res.data);
    }
  }
};
