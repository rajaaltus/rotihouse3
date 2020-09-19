<template>
  <div>
    <Hero />
    <main-search />
    <category-bar class="mx-auto text-center" />
    <div class="md:px-20 sm:mx-auto sm:px-4 px-2 sm:py-8 mt-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <lazy-product-card v-for="(dish, index) in filteredDishes" :key="index" :dish="dish" />
      </div>
    </div>

    <side-checkout class="z-50" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      cartState: false,
    };
  },
  computed: {
    ...mapState({
      filteredDishes: (state) => state.product.filteredDishes,
    }),
  },
  async fetch({store}) {
    await store.dispatch('product/initDishes');
  },
  methods: {},
};
</script>
