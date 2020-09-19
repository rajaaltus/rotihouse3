export const state = () => ({
  sideCart: false
});

export const mutations = {
  SET_SIDECART(state, sideCart) {
    state.sideCart = sideCart;
  },
  CLOSE_CART(state, sideCart) {
    state.sideCart = sideCart;
  }

};

export const actions = {
  setSideCart({commit}) {
    commit('SET_SIDECART', true);
  },
  closeCart({commit}) {
    commit('CLOSE_CART', false);
  }
};
