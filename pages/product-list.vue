<template>
  <div class="flex items-top justify-center">
    <div class="mx-auto w-full lg:w-8/12 mb-10">
      <table-list @editTriggered="handleEdit" :editProduct="selectedProduct" :products="products" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      selectedProduct: 0,
      products: [],
    };
  },
  computed: {
    ...mapState({
      dishes: (state) => state.filteredDishes,
    }),
  },
  async fetch() {
    let result = await this.$strapi.find("dishes");
    this.$store.commit("INIT_DISHES", result);
  },
  mounted() {
    this.products = this.dishes;
  },
  methods: {
    handleEdit(product) {
      this.showModal = true;
      this.selectedProduct = product.id;
    },
  },
};
</script>
