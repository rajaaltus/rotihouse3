export const state = () => ({
  sideCart: false,
  filteredDishes: [],
  dishes: []
});

export const mutations = {
  SET_SIDECART(state, sideCart) {
    state.sideCart = sideCart;
  },
  CLOSE_CART(state, sideCart) {
    state.sideCart = sideCart;
  },
  INIT_DISHES(state, resp) {
    state.dishes = resp;
    state.filteredDishes = resp;
  },
  SET_DISHES_BY_CATEGORY(state, val) {
    state.filteredDishes = state.dishes.filter(dish => dish.category.name.toLowerCase().includes(val.toLowerCase()));
  },

};

export const actions = {
  async nuxtServerInit ({ commit, state }) {
    let res = await this.$axios.$get('/dishes').then(resp => {
      commit('INIT_DISHES', resp);
    });
  },
  setDishesByCategory({commit}, val) {
    commit('SET_DISHES_BY_CATEGORY', val);
  },
  setSideCart({commit}) {
    commit('SET_SIDECART', true);
  },
  closeCart({commit}) {
    commit('CLOSE_CART', false);
  }
};
