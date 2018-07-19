export default {
  namespaced: true,
  state: {
    data: null
  },
  getters: {
    data(state) {
      return state.data;
    }
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    }
  },
  actions: {
    async fetchData({ commit }) {
      commit('setData', [
        { ip: '1.2.3.4', country: 'CN', bans: 800, last_banned: 1532007825, last_bantime: 600 },
        { ip: '1.2.3.5', country: 'CN', bans: 700, last_banned: 1532007840, last_bantime: 1200 },
        { ip: '1.2.3.6', country: 'RU', bans: 600, last_banned: 1532007844, last_bantime: 600 },
        { ip: '1.2.3.7', country: 'RU', bans: 500, last_banned: 1532007848, last_bantime: 1200 },
        { ip: '1.2.3.8', country: 'PL', bans: 400, last_banned: 1532007852, last_bantime: 600 },
        { ip: '1.2.3.9', country: 'PL', bans: 300, last_banned: 1532007856, last_bantime: 1200 }
      ]);
    }
  }
};
