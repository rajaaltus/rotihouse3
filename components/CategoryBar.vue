<template>
  <section class="mt-10 mx-4 md:mx-20">
    <div class="grid grid-1 grid-flow-col gap-8 mx-2 pb-4 overflow-x-scroll">
      <div v-for="(category, index) in categories" :key="index" class="">
        <nuxt-link :to="category.path" class=" font-bold text-2xl text-gray-600 hover:text-gray-800 hover:underline transition ease-out-in duration-500">
          {{ category.name }}
        </nuxt-link>
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
          name: "Appetizers",
          path: '/vegetables',
          icon: "",
        },
        {
          id: 2,
          name: "Breads",
          path: '/fruits',
          icon: "",
        },
        {
          id: 3,
          name: "Rice",
          path: '/',
          icon: "",
        },
        {
          id: 4,
          name: "Curries",
          path: '/',
          icon: "",
        },
        {
          id: 5,
          name: "Rolls",
          path: '/',
          icon: "",
        },
        {
          id: 6,
          name: "Kebabs",
          path: '/',
          icon: "",
        },
        {
          id: 7,
          name: "Smoothies",
          path: '/',
          icon: "",
        },
      ],
    };
  },
};
</script>

