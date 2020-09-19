<template>
  <div>
    <carousel :autoplay="true" :dots="true" :nav="false" :items="1" :autoHeight="true">
      <div style="height:50vh;" class="w-full relative">
        <img class="object-cover h-full " src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1824&q=80" />
        <div class="absolute top-0 mt-20 md:mt-40 w-full md:w-1/2 px-10 md:px-20">
          <h2 class=" bg-red-700 bg-opacity-50 text-gray-200 text-2xl font-semibold tracking-wider uppercase px-2 mx-2">South Indian Delight</h2>
          <p class="text-sm text-gray-900 font-medium py-2  px-2 tracking-widest mx-2">Our exquisit sounth indian dishes will make you feel the nativity in all flavours!</p>
        </div>
      </div>
      <div class="w-full">
        <img class="object-cover" style="height:50vh;" src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <div class="absolute top-0 mt-20 md:mt-40 w-full md:w-1/2 px-10 md:px-20">
          <h2 class=" bg-red-700 bg-opacity-50 text-gray-200 text-2xl font-semibold tracking-wider uppercase px-2 mx-2">South Indian Delight</h2>
          <p class="text-sm text-gray-900 font-medium py-2  px-2 tracking-widest mx-2">Our exquisit sounth indian dishes will make you feel the nativity in all flavours!</p>
        </div>
      </div>
      <div class="w-full">
        <img class="object-cover" style="height:50vh;" src="https://images.unsplash.com/photo-1536304575888-ccb70eeef59b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <div class="absolute top-0 mt-20 md:mt-40 w-full md:w-1/2 px-10 md:px-20">
          <h2 class=" bg-red-700 bg-opacity-50 text-gray-200 text-2xl font-semibold tracking-wider uppercase px-2 mx-2">South Indian Delight</h2>
          <p class="text-sm text-gray-900 font-medium py-2  px-2 tracking-widest mx-2">Our exquisit sounth indian dishes will make you feel the nativity in all flavours!</p>
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
        arrows: true,
      },
    };
  },
};
</script>
