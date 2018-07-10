import Vue from 'vue';
import Vuex from 'vuex';
import countries from './countries';
import jails from './jails';
import servers from './servers';
import days from './days';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    countries,
    jails,
    servers,
    days
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
});
