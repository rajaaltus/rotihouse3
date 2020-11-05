<template>
  <div class="relative">
    <button @click="showDrop = !showDrop" class="relative block overflow-hidden bg-gray-800 rounded-full px-2 py-2 focus:outline-none focus-border-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </button>
    <button class="fixed inset-0 h-full w-full z-20" v-if="showDrop" @click="showDrop = false" tabindex="-1"></button>
    <div v-if="showDrop" class="sm:absolute right-0 z-20 mt-2 py-2 w-56 bg-gray-900 shadow-lg">
      <nuxt-link class="block px-4 py-2 text-gray-400 hover:bg-red-600 hover:text-white" to="/settings">Account Settings</nuxt-link>
      <nuxt-link class="block px-4 py-2 text-gray-400 hover:bg-red-600 hover:text-white" to="/orders">My Orders</nuxt-link>
      <nuxt-link class="block px-4 py-2 text-gray-400 hover:bg-red-600 hover:text-white" to="/signout">Sign out</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDrop: false,
    };
  },
  mounted() {
    const handleEscape = (e) => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.showDrop = false;
      }
    };
    document.addEventListener("keydown", handleEscape);

    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", handleEscape);
    });
  },
  methods: {
    signOut() {
      this.$auth.logout();
      this.$router.push("/login");
    },
  },
};
</script>
