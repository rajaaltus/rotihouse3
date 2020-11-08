<template>
  <vueper-slides lazy lazy-load-on-drag autoplay fixedHeight="400px">
    <vueper-slide v-for="slide in slides" :key="slide.id" :title="slide.title" :content="slide.content" :image="$url() + slide.image.url" :duration="duration">
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
      slides: [],
      duration: 3000,
    };
  },
  async fetch() {
    const result = await fetch(this.$url() + "/sliders/1").then((resp) => resp.json());
    this.slides = result.slides;
  },
  mounted() {},
};
</script>
