import cookieparser from "cookieparser";
import Cookies from "js-cookie";

export const state = () => ({
  sideCart: false,
  filteredDishes: [],
  dishes: [],
  user: null,
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
    Cookies.set("user", user);
  },
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
  async nuxtServerInit({ commit }, { req }) {
    let res = await this.$axios.$get("/dishes").then((resp) => {
      commit("INIT_DISHES", resp);
    });
    let user = null;
    let cart = [];
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      cart = (parsed.cart && JSON.parse(parsed.cart)) || [];
    }

    user = this.$auth.user;
    commit("setUser", user);
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

export const getters = {
  username: (state) => {
    return state.user && state.user.username;
  },
};
