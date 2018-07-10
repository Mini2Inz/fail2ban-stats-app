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
        map[label[0]] = state.data.default[idx];
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
