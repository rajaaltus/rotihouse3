<template>
  <div>
    <PageTitle :title="dish ? dish.name : ''" />
    <div class="mx-6 md:mx-20">
      <div class="max-w-lg">
        <img :src="dish.image && dish.image.url ? $url() + dish.image.url : '/placeholder.png'" :alt="dish.name" />
      </div>
      <div>
        <h3 class="text-2xl font-semibold text-gray-700 tracking-wide">{{ dish.name }}</h3>
        <span class="text-gray-100 text-xs rounded-full px-2 py-1" :class="dish.type === 'non_vegetarian' ? 'bg-red-600' : 'bg-green-600'">{{ dish.type === "non_vegetarian" ? "Non-Veg" : "Veg" }}</span>
        <p class="text-sm font-medium text-gray-600">{{ dish.description }}</p>
        <p class="text-lg font-semibold text-gray-700 tracking-wide">{{ dish.price | formatCurrency }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ params, $url }) {
    const api = $url() + "/dishes/" + params.id;
    const dish = await fetch(api).then((res) => res.json());
    return { dish };
  },
};
</script>
