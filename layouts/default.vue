<template>
  <div class="flex flex-col h-screen bg-gray-200 dark:bg-gray-900">
    <Header />
    <div class="flex-1 overflow-y-auto">
      <Nuxt class="min-h-screen" />
      <Footer2 />
    </div>
  </div>
</template>
<script>
export default {
  // middleware: "auth",
};
</script>
