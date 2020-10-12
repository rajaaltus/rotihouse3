<template>
  <div>
    <PageTitle :title="dish ? dish.name : ''" />
    <div class="mx-6 md:mx-20">
      <div class="max-w-lg">
        <img :src="dish && dish.image ? $axios.defaults.baseURL + dish.image.url : '/placeholder.png'" :alt="dish.image ? dish.image.name : 'no image'" />
      </div>
      <div>
        <h3 class="text-2xl font-semibold text-gray-700 tracking-wide">{{ dish.name }}</h3>
        <span class="text-gray-100 text-xs rounded-full px-2 py-1" :class="dish.type === 'non_vegetarian' ? 'bg-red-600' : 'bg-green-600'">{{ dish.type === "non_vegetarian" ? "Non-Veg" : "Veg" }}</span>
        <p class="text-sm font-medium text-gray-600">{{ dish.description }}</p>
        <p class="text-lg font-semibold text-gray-700 tracking-wide">{{ dish.price }} <span class="text-gray-600 text-xs">kip</span></p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      dishes: (state) => state.product.dishes,
    }),
    dish() {
      if (this.dishes.length > 0) return this.$store.state.product.dishes.find((dish) => dish.id == this.$route.params.id);
    },
  },
  async created() {
    if (this.$store.state.product.dishes.length == 0) {
      // console.log('hi im from ')
      this.$store.dispatch("product/initDishes");
    }
  },
};
</script>
