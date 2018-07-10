import Vue from 'vue';
import Vuex from 'vuex';
import countries from './countries';
import jails from './jails';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    countries,
    jails
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
});
