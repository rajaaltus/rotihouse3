<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.logout();
  },
  methods: {
    logout() {
      this.$auth.logout();
      this.$strapi.logout();
      window.href("/");
    },
  },
};
</script>
