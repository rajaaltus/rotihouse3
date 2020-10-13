import cookieparser from "cookieparser";

export const state = () => ({
  sideCart: false,
  filteredDishes: [],
  dishes: [],
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
    state.filteredDishes = state.dishes.filter((dish) => dish.category.name.toLowerCase().match(val.toLowerCase()));
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    let res = await this.$axios.$get("/dishes").then((resp) => {
      commit("INIT_DISHES", resp);
    });
    let user = null;
    let cart = [];
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      user = (parsed.user && JSON.parse(parsed.user)) || null;
      cart = (parsed.cart && JSON.parse(parsed.cart)) || [];
      if (process.browser) console.log(JSON.parse(localStorage.getItem("cart")) || []);
    }
    commit("auth/setUser", user);
    commit("cart/setItems", cart);
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
