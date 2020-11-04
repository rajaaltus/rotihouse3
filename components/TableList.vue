<template>
  <div class="flex flex-col mt-20">
    <product-modal v-if="showModal" :product="selectedProduct" @close="showModal = false" @updateRequest="doEdit" />
    <div class="absolute top-0 right-0"></div>
    <!-- <pre>{{ products }}</pre> -->
    <button class="bg-green-600 text-white px-12 py-2 mx-auto font-medium rounded" v-if="$fetchState.pending">Loading...</button>
    <div v-else class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Cooking Time
                </th>
                <th class="px-6 py-3 bg-gray-50">
                  <button class="text-white bg-green-600 px-4 py-2 text-xs font-normal tracking-wider rounded" @click="$fetch">
                    <svg fill="none" class="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h1m15 2A8 8 0 005 9m0 0h4m11 11v-5h-1m0 0a8 8 0 01-15-2m15 2h-4" />
                    </svg>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-400">
              <tr v-for="product in products" :key="product.id">
                <td class="px-6 py-4 whitespace-no-wrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full object-cover" :src="product.image && product.image.url ? $axios.defaults.baseURL + product.image.url : '/placeholder.png'" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900 dark:text-green-400">
                        {{ product.name }}
                      </div>
                      <div class="text-sm leading-5 text-gray-500 dark:text-gray-200">
                        {{ product.type }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <div class="text-sm leading-5 text-gray-900 dark:text-gray-200">{{ product.category.name }}</div>
                  <div class="text-sm leading-5 text-gray-500 dark:text-gray-300">{{ product.category.length }}</div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-900">
                    {{ product.price | formatCurrency }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">{{ product.cooking_time }} Mins</td>
                <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <button class="text-indigo-600 hover:text-indigo-900" @click="handleEdit(product)">Edit</button>
                </td>
              </tr>

              <!-- More rows... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      showModal: false,
      selectedProduct: {},
    };
  },
  async fetch() {
    this.products = await this.$strapi.find("dishes");
  },
  methods: {
    handleEdit(product) {
      this.showModal = true;
      this.selectedProduct = product;
    },
    async doEdit(product) {
      // console.log("new product: ", product);
      await this.$strapi.$dishes.update(product.id, product);
      this.showModal = false;
    },
  },
};
</script>
