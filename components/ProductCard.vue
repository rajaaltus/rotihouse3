<template>
  <div class="sm:max-w-sm max-w-full px-4 mb-4 py-4 sm:p-0 sm:mb-8 border border-1 border-solid border-gray-300 hover:shadow-lg transition duration-500">
    <div class="">
      <div v-if="loading" class="border border-gray-300 sm:max-w-sm max-w-full px-6  py-4 sm:p-0">
        <div class="animate-pulse flex space-x-4 h-64">
          <img class="h-full w-full object-cover" src="/placeholder.png" alt="" />
        </div>
      </div>

      <div v-else class="relative pb-2/3">
        <img class="absolute top-0 bottom-0 h-full w-full object-cover" :src="dish.imageUrl" :alt="dish.imageAlt" />
        <button class="absolute px-2 py-1 bg-teal-700 text-teal-200 rounded-full shadow-lg hover:shadow-none cursor:pointer m-2 ">
          <div class="flex items-center">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>25 Mins</span>
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
            <div class="text-gray-600 text-xs uppercase tracking-wide">{{ dish.beds }} beds &bull; {{ dish.baths }} baths</div>
          </div>
          <h4 class="mt-1 font-semibold text-lg leading-tight truncate">
            {{ dish.title }}
          </h4>
          <div class="mt-1">
            {{ dish.formattedPrice }}
            <span class="text-gray-600 text-sm"> / wk</span>
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
  </div>
</template>

<script>
export default {
  props: ["dish"],
  data() {
    return { loading: true };
  },
  async mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
};
</script>
