<template>
  <div>
    <!-- <Hero class="hero" /> -->
    <Toast v-if="$store.state.alert" />
    <!-- Search Section -->
    <section class="px-6 sm:px-20 mt-10">
      <div class="bg-white flex items-center px-2 py-4 border border-solid border-gray-300 shadow-sm">
        <!-- <svg viewBox="0 0 20 20" class="fill-current text-gray-500 w-6 h-6 mx-4"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg> -->
        <svg fill="none" class="text-gray-600 h-6 w-6 mx-4" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <div class="flex justify-between w-full items-center mr-4">
          <input v-model="search" type="search" class="border-none focus:outline-none font-3xl mr-2 py-1 text-gray-500 w-full" @focus="search = ''" placeholder="Search Here..." />
        </div>
      </div>
    </section>
    <div class="cart fixed z-30 top-0 right-0 h-full flex items-center">
      <button @click="openCart" class="border-none focus:outline-none">
        <div class="mr-2 bg-gray-800 rounded-full flex items-center py-1 shadow-md hover:shadow-lg hover:bg-gray-600 transition ease-out-in duration-500">
          <svg viewBox="0 0 512 512" :class="numberOfItems > 0 ? 'mr-0 shadow-lg' : 'mr-2'" class="fill-current text-green-500 w-6 h-6 ml-2">
            <path
              d="M457 216L315 74a30 30 0 10-21 21l121 121H97L218 95a30 30 0 10-21-21L55 216H0v30h28l46 174c8 33 38 56 72 56h220c34 0 64-23 72-56l46-174h28v-30h-55zM181 391h-30v-90h30v90zm60 0h-30v-90h30v90zm60 0h-30v-90h30v90zm60 0h-30v-90h30v90z"
            />
          </svg>
          <span v-if="numberOfItems > 0" class="mr-2 ml-1 px-2 bg-green-500 rounded-full text-xs font-normal text-gray-800">{{ numberOfItems }}</span>
          <!-- <span v-if="numberOfItems > 0" class="mr-2 w-24 px-2 bg-green-500 rounded-full text-xs font-normal text-gray-800">{{ totalPrice }} kip</span> -->
        </div>
      </button>
    </div>
    <!-- Category Bar -->
    <category-bar class="mx-auto text-center" />
    <!-- products -->
    <div class="md:px-20 sm:mx-auto sm:px-4 px-2 sm:py-8 mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <lazy-product-card v-for="(dish, index) in filteredDishes" :key="index" :dish="dish" />
      </div>
    </div>

    <!-- Side Checkout -->
    <side-checkout class="z-50" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import gsap from "gsap";
export default {
  data() {
    return {
      cartState: false,
      search: "",
      cart: true,
    };
  },
  computed: {
    ...mapState({
      dishes: (state) => state.filteredDishes,
    }),
    cartItems() {
      return this.$storage.getLocalStorage("cart");
    },
    totalPrice() {
      return this.$store.getters["cart/price"];
    },
    numberOfItems() {
      return this.$store.getters["cart/numberOfItems"];
    },
    filteredDishes() {
      return this.dishes.filter((dish) => dish.name.toLowerCase().includes(this.search.toLowerCase()));
    },
  },
  async fetch({ store }) {
    let result = await fetch("https://api.rotihouselao.com/dishes").then((res) => res.json());
    store.commit("INIT_DISHES", result);
  },
  async mounted() {
    this.$fetch;
    gsap.fromTo(".cart", { y: -1000 }, { y: 0, duration: 1, ease: "bounce", delay: 1.5 });
    if (this.cartItems && this.cartItems.length > 0) this.$store.commit("cart/setItems", this.cartItems);
  },
  methods: {
    openCart() {
      this.$store.dispatch("setSideCart");
    },
  },
};
</script>
