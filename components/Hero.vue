<template>
  <div>
    <carousel :autoplay="true" :items="1" :autoHeight="true">
      <div style="height: 30vh;" class="w-full relative">
        <img class="object-cover h-full" src="https://images.unsplash.com/photo-1601050690294-397f3c324515?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <div class="absolute top-0 mt-20 md:mt-40 w-full md:w-1/2 px-10 md:px-20">
          <h2 class="bg-red-700 bg-opacity-50 text-gray-200 text-2xl font-semibold tracking-wider uppercase px-2 mx-2">Original! Native Taste!</h2>
          <p class="text-sm text-white font-medium py-2 px-2 tracking-widest mx-2 my-2 bg-gray-800 opacity-50">Our exquisit sounth indian dishes will make you feel the nativity in all flavours!</p>
        </div>
      </div>
      <div class="w-full">
        <img class="object-cover" style="height: 30vh;" src="https://images.unsplash.com/photo-1508996369280-b9165f545b08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <div class="absolute top-0 mt-20 md:mt-40 w-full md:w-1/2 px-10 md:px-20">
          <h2 class="bg-red-700 bg-opacity-50 text-gray-200 text-2xl font-semibold tracking-wider uppercase px-2 mx-2">South Indian Delight</h2>
          <p class="text-sm text-white font-medium py-2 px-2 tracking-widest mx-2 my-2 bg-gray-800 opacity-50">Our exquisit sounth indian dishes will make you feel the nativity in all flavours!</p>
        </div>
      </div>
      <div class="w-full">
        <img class="object-cover" style="height: 30vh;" src="https://images.unsplash.com/photo-1599307767316-776533bb941c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80" />
        <div class="absolute top-0 mt-20 md:mt-40 w-full md:w-1/2 px-10 md:px-20">
          <h2 class="bg-red-700 bg-opacity-50 text-gray-200 text-2xl font-semibold tracking-wider uppercase px-2 mx-2">South Indian Delight</h2>
          <p class="text-sm text-white font-medium py-2 px-2 tracking-widest mx-2 my-2 bg-gray-800 opacity-50">Our exquisit sounth indian dishes will make you feel the nativity in all flavours!</p>
        </div>
      </div>
    </carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
      },
    };
    mounted() {
      gsap.fromTo(
      ".hero",
      { y: "-400" },
      {
        y: 0,
        duration: 1,
        ease: "bounce",
        delay: 1,
      }
    );

    }
  },
};
</script>
