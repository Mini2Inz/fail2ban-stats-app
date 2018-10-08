import axios from 'axios';

export default {
  namespaced: true,
  state: {
    pending: false,
    data: null,
    error: null
  },
  getters: {
    pending(state) {
      return state.pending;
    },
    data(state) {
      if (!state.data) return null;
      return {
        labels: [...state.data.labels].reverse(),
        values: [...state.data.datasets[0].data].reverse()
      };
    },
    error(state) {
      return state.error;
    }
  },
  mutations: {
    setPending(state) {
      state.pending = true;
    },
    setData(state, data) {
      state.pending = false;
      state.data = data;
    },
    setError(state, error) {
      state.pending = false;
      state.error = error;
    }
  },
  actions: {
    async fetchData({ commit }) {
      commit('setPending');
      try {
        const res = await axios.get('/api/weeklybans');
        commit('setData', res.data);
      } catch (err) {
        commit('setError', err);
      }
    }
  }
};
