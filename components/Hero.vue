<template>
  <div>
    <carousel :autoplay="true" :dots="true" :nav="false" :items="1" :autoHeight="true" >
      <div class="w-full ">
        <img class="object-cover h-full" style="height:50vh;" src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1824&q=80" />
      </div>
      <div class="w-full">
        <img class="object-cover" style="height:50vh;" src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      </div>
      <div class="w-full">
        <img class="object-cover" style="height:50vh;" src="https://images.unsplash.com/photo-1536304575888-ccb70eeef59b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
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
