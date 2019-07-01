const mutations = {
  user(state, payload) {
    state.user = payload;
  },
  token(state, payload) {
    state.token = payload;
  },
  movimentacoes(state, payload) {
    state.movimentacoes.unshift(payload);
  },
  remove_movimentacoes(state, payload) {
    const index = state.movimentacoes.indexOf(payload);
    state.movimentacoes.splice(index, 1);
  },
};

export default mutations;
