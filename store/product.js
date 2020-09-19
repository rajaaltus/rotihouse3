export const state = () => ({
  filteredDishes: [],
  dishes: []
});

export const mutations = {
  SET_DISHES(state, val) {
    state.filteredDishes = state.dishes.filter(dish => dish.name.toLowerCase().includes(val.toLowerCase()));
  },
  SET_DISHES_BY_CATEGORY(state, val) {
    state.filteredDishes = state.dishes.filter(dish => dish.category.name.toLowerCase().includes(val.toLowerCase()));
  },
  INIT_DISHES(state, resp) {
    state.dishes = resp;
  }
};

export const actions = {
  setDishes({commit}, val) {
    commit('SET_DISHES', val);
  },
  setDishesByCategory({commit}, val) {
    commit('SET_DISHES_BY_CATEGORY', val);
  },
  async initDishes({commit}) {
    await this.$axios.$get('/dishes',{defer:true}).then(resp => {
      commit('INIT_DISHES', resp);
    }).catch(e=>{
      console.log(e);
    });
  }
};