<template>
  <div class="flex items-center justify-center">
    <div class="m-auto">
      <table-list @editTriggered="handleEdit" :editProduct="selectedProduct" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProduct: 0,
    };
  },
  methods: {
    handleEdit(product) {
      this.showModal = true;
      this.selectedProduct = product.id;
    },
  },
};
</script>
