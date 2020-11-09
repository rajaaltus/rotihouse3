<template>
  <div class="flex items-top justify-center">
    <div class="mx-auto w-full lg:w-8/12 mb-10">
      <table-list @editTriggered="handleEdit" :editProduct="selectedProduct" :products="products" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProduct: 0,
      products: [],
    };
  },
  async fetch() {
    this.products = await this.$strapi.find("dishes");
  },
  methods: {
    handleEdit(product) {
      this.showModal = true;
      this.selectedProduct = product.id;
    },
  },
};
</script>
