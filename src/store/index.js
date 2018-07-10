import Vue from 'vue';
import Vuex from 'vuex';
import countries from './countries';
import jails from './jails';
import servers from './servers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    countries,
    jails,
    servers
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
});
