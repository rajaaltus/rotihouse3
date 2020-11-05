<template>
  <section class="mt-5">
    <div class="grid grid-1 grid-flow-col gap-16 mx-4 pb-0 overflow-x-scroll">
      <div v-for="(category, index) in categories" :key="index" class="">
        <button @click="filterDishes(category.name)" class="focus:outline-none font-bold text-lg text-gray-600 hover:text-gray-800 hover:underline transition ease-out-in duration-500">
          {{ category.name }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "All",
          icon: "",
        },
        {
          id: 2,
          name: "Appetizers",
          icon: "",
        },
        {
          id: 3,
          name: "Breads",
          icon: "",
        },
        {
          id: 4,
          name: "Rice",
          icon: "",
        },
        {
          id: 5,
          name: "Curries",
          icon: "",
        },
        {
          id: 6,
          name: "Rolls",
          icon: "",
        },
        {
          id: 7,
          name: "Kebabs",
          icon: "",
        },
        {
          id: 8,
          name: "Smoothies",
          icon: "",
        },
      ],
    };
  },

  methods: {
    filterDishes(name) {
      if (name === "All") name = "";
      this.$store.dispatch("setDishesByCategory", name);
    },
  },
};
</script>
