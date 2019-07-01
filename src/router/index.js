import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

import routes from './routes';

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  function isLogado() {
    try {
      const user = store.getters.user || null;
      if (user == null) {
        return false;
      }
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
  Router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
      if (isLogado()) {
        return next({ path: '/' });
      }
    } else if (!isLogado()) {
      return next({ path: '/login' });
    }
    return next();
  });

  return Router;
}
