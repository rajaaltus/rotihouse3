<template>
  <div class="sm:max-w-sm max-w-full px-4 mb-4 py-4 sm:p-0 sm:mb-8 border border-1 border-solid border-gray-300 hover:shadow-lg transition duration-500">
    <nuxt-link :to="`/dish/${dish.id}`">
    <div class="">
      <div v-if="loading" class="border border-gray-300 sm:max-w-sm max-w-full px-6 py-4 sm:p-0">
        <div class="animate-pulse flex space-x-4 h-64">
          <img class="h-full w-full object-cover" src="/placeholder.png" alt="" />
        </div>
      </div>

      <div v-else class="relative pb-2/3">
        <img class="absolute top-0 bottom-0 h-full w-full object-cover" :src="dish.image?$axios.defaults.baseURL + dish.image.url:'/logo.svg'" :alt="dish.name" />
        <button class="absolute px-2 py-1 bg-gray-800 text-teal-200 rounded-full shadow-lg hover:shadow-none cursor:pointer m-2">
          <div class="flex items-center">
            <svg class="fill-none h-5 w-5 text-gray-400"  viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="ml-1 text-xs tracking-wider">25 Mins</span>
          </div>
        </button>
      </div>
      <div class="relative">
        <div v-if="loading" class="animate-pulse bg-gray-200 px-4 h-32">
          <div class="pt-1 space-y-4">
            <div class="h-4 mt-6 bg-gray-400 rounded w-3/4"></div>
            <div class="h-4 bg-gray-400 rounded"></div>
            <div class="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
        <div v-else class="bg-white p-6">
          <div class="flex items-baseline">
            <span class="inline-block mr-2 bg-green-600 text-xs text-white px-2 uppercase font-semibold tracking-wide rounded-full">New</span>
            <div class="text-gray-600 text-xs uppercase tracking-wide">{{ dish.type }}</div>
          </div>
          <h4 class="mt-1 font-semibold text-lg leading-tight truncate">
            {{ dish.name }}
          </h4>
          <div class="mt-1">
            {{ dish.price }}
            <span class="text-gray-600 text-sm"> kip</span>
          </div>
          <div class="mt-2 flex items-center">
            <svg v-for="i in 5" :key="i" :class="i <= dish.rating ? 'text-green-600' : 'text-gray-400'" class="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M10 1l2 7h7l-5 4 1 7-5-4-5 4 1-7-5-4h7l2-7z" />
            </svg>
            <span class="text-gray-600 text-sm ml-2"> {{ dish.reviewCount }} reviews</span>
          </div>
        </div>
      </div>
    </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["dish"],
  data() {
    return { loading: true };
  },
  async mounted() {
    this.loading = false;
  },
};
</script>
