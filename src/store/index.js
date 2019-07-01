import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import state from './store/state';
import actions from './store/actions';
import getters from './store/getters';
import mutations from './store/mutations';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins: [createPersistedState({ storage: window.sessionStorage })],
});
