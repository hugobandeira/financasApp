
const actions = {
  login(state, payload) {
    const { email, password } = state.getters.user;
    return new Promise((resolve, reject) => {
      if (email !== payload.email && password !== payload.password) {
        reject('Não existe esse user!');
      }
      resolve(payload);
      // window.location = '/';
    });
  },
  createUser(state, payload) {
    return new Promise((resolve, reject) => {
      if (!payload.email && !payload.password) {
        reject('Preencha os campos');
      }
      state.commit('user', payload);
      resolve(payload);
    });
  },
  logout(state) {
    window.location = '/login';
    state.commit('user', {});
  },
  movimentacoes(state, payload) {
    state.commit('movimentacoes', payload);
  },
};

export default actions;
