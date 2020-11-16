export const state = () => ({
  sideCart: false,
  filteredDishes: [],
  dishes: [],
  user: null,
});

export const mutations = {
  logout(state) {
    state.user = null;
    Cookies.set("user", null);
    Cookies.set("cart", null);
  },
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
    state.filteredDishes = state.dishes.filter((dish) => dish.category.name.toLowerCase().match(val.toLowerCase()));
  },
};

export const actions = {
  async nuxtServerInit(vuexContext, { $strapi }) {
    const result = await $strapi.$dishes.find();
    vuexContext.commit("INIT_DISHES", result);
  },
  setDishesByCategory({ commit }, val) {
    commit("SET_DISHES_BY_CATEGORY", val);
  },
  setSideCart({ commit }) {
    commit("SET_SIDECART", true);
  },
  closeCart({ commit }) {
    commit("CLOSE_CART", false);
  },
};

export const getters = {
  username: (state) => {
    return state.user && state.user.username;
  },
};
