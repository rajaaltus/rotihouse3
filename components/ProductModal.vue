<template>
  <div>
    <div v-show="modalState" class="fixed z-40 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <transition enter-active-class="ease-out duration-300" enter-class="opacity-0" enter-to-class="opacity-100" leave-active-class="ease-in duration-200" leave-class="opacity-100" leave-to-class="opacity-0">
          <div v-show="modalState" class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
        </transition>
        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-200"
          leave-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            v-show="modalState"
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <!-- product form -->
                <form class="w-full max-w-lg">
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Product Name
                      </label>
                      <input
                        v-model="editProduct.name"
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                      />
                      <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Category
                      </label>
                      <multiselect v-model="editProduct.category.name" :options="categories"></multiselect>
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Description</label>
                      <textarea
                        v-model="editProduct.description"
                        rows="3"
                        class="appearance-none block w-full text-sm bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        placeholder="product description...."
                      ></textarea>
                    </div>
                    <div class="w-full px-3">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Cooking Time
                      </label>
                      <input
                        v-model="editProduct.cooking_time"
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        placeholder="Approx. Cooking time (in min)"
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        New
                      </label>
                      <toggle-button v-model="editProduct.new" :value="editProduct.new" :sync="true" />
                    </div>
                    <div class="w-full md:w-4/5 px-3 mb-6 md:mb-0">
                      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Price
                      </label>
                      <input
                        v-model="editProduct.price"
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="number"
                        step="1000"
                        placeholder="Product Price"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  type="button"
                  class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  @click="handleUpdate"
                >
                  Update
                </button>
              </span>
              <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  type="button"
                  class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  @click="close"
                >
                  Cancel
                </button>
              </span>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div v-if="loading" class="absolute inset-0 bg-gray-500 opacity-75 z-50 flex items-center justify-center">
      <svg class="fill-current w-6 h-6 animate-spin" viewBox="0 0 20 20"><path d="M18 9h2l-1-3-2 1 1 2zm-4-8l-3-1v2l2 1 1-2zm2 5l2-1-2-3-1 2 1 2zm-6 12A8 8 0 019 2V0a10 10 0 1011 11h-3c0 4-3 7-7 7z" /></svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  async fetch() {
    const result = await this.$strapi.find("categories");
    this.categories = result.map((item) => item.name);
  },
  data() {
    return {
      loading: false,
      categories: [],
      modalState: false,
      editProduct: {
        id: 0,
        category: 0,
        cooking_time: 0,
        description: "",
        name: "",
        new: false,
        price: 0,
        type: "",
      },
    };
  },
  async mounted() {
    this.modalState = true;
    this.editProduct = this.product;
    // console.log(this.editProduct);
  },
  methods: {
    close() {
      this.$emit("close");
    },
    handleUpdate() {
      console.log("Handled...");
      this.$emit("updateRequest", this.editProduct);
      this.loading = true;
    },
  },
};
</script>
