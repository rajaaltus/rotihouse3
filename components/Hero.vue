<template>
  <vueper-slides lazy lazy-load-on-drag autoplay fixedHeight="400px">
    <vueper-slide v-for="(slide, i) in sliders" :key="i" :title="slide.name" :image="$url() + slide.images[0].url" :duration="duration">
      <template v-slot:loader>
        <i class="icon icon-loader spinning"></i>
        <span>Loading...</span>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
export default {
  data() {
    return {
      sliders: [],
      duration: 3000,
    };
  },
  async fetch() {
    this.sliders = await this.$strapi.$sliders.find();
  },
  mounted() {},
};
</script>
