<template>
  <div class="fixed overflow-hidden" :class="sideCart ? 'inset-0' : ''">
    <div class="absolute inset-0 overflow-hidden">
      <div v-if="sideCart" @click="closeCart" class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <transition enter-active-class="ease-in-out duration-500" enter-class="opacity-0" enter-to-class="opacity-100" leave-active-class="ease-in-out duration-500" leave-class="opacity-100" leave-to-class="opacity-0">
        <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <transition
            enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
            enter-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
            leave-class="translate-x-0"
            leave-to-class="translate-x-full"
          >
            <div v-if="sideCart" class="relative w-screen max-w-xl">
              <transition enter-active-class="ease-in-out duration-500" enter-class="opacity-0" enter-to-class="opacity-100" leave-active-class="ease-in-out duration-500" leave-class="opacity-100" leave-to-class="opacity-0">
                <div v-if="sideCart" class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                  <button @click="closeCart" aria-label="Close panel" class="text-gray-300 hover:text-white transition ease-in-out duration-150">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </transition>
              <div class="h-full flex flex-col space-y-6 py-6 bg-gray-200 shadow-xl overflow-y-scroll overflow-x-hidden">
                <header class="px-4 sm:px-6">
                  <h2 class="text-lg leading-7 font-medium text-gray-900">
                    Cart Items
                  </h2>
                </header>
                <div class="relative flex-1 px-4 sm:px-6">
                  <!-- Replace with your content -->
                  <div class="absolute inset-0 px-4 sm:px-6">
                    <div class="h-full border-2 border-dashed border-gray-200">
                      <!-- Main Content here -->
                      <table class="w-full text-center text-xs">
                        <thead class="bg-gray-800 text-gray-300">
                          <tr>
                            <th class="w-1/3 py-2">Name</th>
                            <th class="hidden md:block w-1/6 py-2">Price (unit)</th>
                            <th class="w-1/6 py-2">Qty</th>
                            <th class="w-1/3 py-2">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b border-solid border-gray-400" v-for="(item, index) in selectedItems" :key="index">
                            <td class="py-2 w-1/3">
                              <div class="flex items-center justify-start">
                                <img class="hidden md:block w-16 h-16 rounded-full bg-white object-cover p-2" :src="item.image ? $url() + item.image.url : '/logo.svg'" :alt="item.name" />
                                <span class="text-sm ml-2 font-medium text-gray-700">{{ item.name }}</span>
                              </div>
                            </td>
                            <td class="hidden md:table-cell py-2 w-1/6 text-gray-700 text-sm font-medium">{{ item.price }} Kip</td>
                            <td class="py-2 w-1/6 text-gray-700 text-sm">
                              <a @click="addToCart(item)" class="bg-gray-500 rounded-full px-1 text-white hover:shadow-md cursor-pointer text-lg tracking-wider font-semibold"><span> +</span></a>
                              {{ item.quantity }}
                              <a @click="handleRemove(item)" class="bg-red-700 rounded-full px-1 text-gray-300 hover:shadow-md cursor-pointer text-lg tracking-wider font-semibold"><span> -</span></a>
                            </td>
                            <td class="py-2 w-1/3 text-gray-700 text-sm font-medium">
                              {{ item.price * item.quantity }}

                              <button class="px-2 my-1 focus:outline-none" @click="removeFromCart(item)">
                                <svg class="current text-gray-800 h-3 w-3" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M4 4a1 1 0 012 0l4 5 4-5a1 1 0 112 2l-5 4 5 4a1 1 0 01-2 2l-4-5-4 5a1 1 0 01-2-2l5-4-5-4a1 1 0 010-2z" clip-rule="evenodd" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="">
                        <button class="relative w-full py-3 rounded text-green-100 mt-4" :class="numberOfItems > 0 ? 'bg-green-500' : 'bg-gray-600'" @click="gotoCheckout">
                          {{ numberOfItems > 0 ? "Go to Checkout" : "No Items in Basket" }}
                          <span class="absolute right-0 top-0 mr-2 mt-2 bg-green-600 text-white px-2 py-1 rounded-md ml-2">{{ totalPrice }} Kip</span>
                        </button>
                      </div>
                      <div>
                        <h4 class="text-lg leading-7 font-medium text-gray-900 mt-10">Delivery location</h4>
                        <div class="flex items-center justify-between mt-4 border-b border-solid border-gray-400 py-2">
                          <div class="flex items-center">
                            <input class="mr-2 leading-tight bg-gray-600" type="radio" />
                            <div class="bg-gray-300 p-2 rounded-full border border-solid">
                              <svg viewBox="0 0 20 20" class="fill-current text-gray-600 w-6 h-6"><path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" /></svg>
                            </div>
                          </div>
                          <span class="text-sm">122, Ban Simuang, Watnak District, vientiane.</span>
                          <button class="bg-gray-500 text-gray-200 px-4 py-0 rounded text-xs">+</button>
                        </div>
                        <div class="flex items-center justify-between mt-4 border-b border-solid border-gray-400 py-2">
                          <div class="flex items-center">
                            <input class="mr-2 leading-tight bg-gray-600" type="radio" />
                            <div class="bg-gray-300 p-2 rounded-full border border-solid">
                              <svg viewBox="0 0 20 20" class="fill-current text-gray-600 w-6 h-6"><path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" /></svg>
                            </div>
                          </div>
                          <span class="text-sm">37, Ban Thapalanxay, Sisattanak District, vientiane.</span>
                          <button class="bg-gray-500 text-gray-200 px-4 py-0 rounded text-xs">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /End replace -->
                </div>
              </div>
            </div>
          </transition>
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      selectedItems: (state) => state.cart.items,
      sideCart: (state) => state.sideCart,
    }),
    totalPrice() {
      return this.$store.getters["cart/price"];
    },
    numberOfItems() {
      return this.$store.getters["cart/numberOfItems"];
    },
  },

  methods: {
    gotoCheckout() {
      let dishesInCart = [];
      dishesInCart = this.selectedItems.map((item) => item.id);
      console.log(dishesInCart);
    },
    handleRemove(item) {
      console.log("from SideCart...emitted..");
      this.$emit("handleRemove", item);
      this.removeFromCart(item);
    },
    async closeCart() {
      await this.$store.dispatch("closeCart");
      this.$emit("trigger");
    },
    ...mapMutations({
      addToCart: "cart/add",
      removeFromCart: "cart/remove",
    }),
  },
};
</script>
