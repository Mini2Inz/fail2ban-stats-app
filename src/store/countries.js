import axios from 'axios';

export default {
  namespaced: true,
  state: {
    period: 'week',
    pending: false,
    data: null,
    error: null
  },
  getters: {
    period(state) {
      return state.period;
    },
    pending(state) {
      return state.pending;
    },
    data(state) {
      if (!state.data || !state.data.default || !state.data.default.length)
        return null;
      return state.data.labels.reduce((map, label, idx) => {
        map[label[0]] = state.data.default[idx];
        return map;
      }, {});
    },
    error(state) {
      return state.error;
    }
  },
  mutations: {
    setPeriod(state, period) {
      state.period = period;
    },
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
    setPeriod({ commit }, period) {
      if (!['day', 'week', 'month'].includes(period))
        throw new Error('Period must be a day, week or month.');
      commit('setPeriod', period);
    },
    async fetchData({ commit, state }) {
      commit('setPending');
      try {
        const res = await axios.get(`/api/country/${state.period}/`);
        commit('setData', res.data);
      } catch (err) {
        commit('setError', err);
      }
    }
  }
};
