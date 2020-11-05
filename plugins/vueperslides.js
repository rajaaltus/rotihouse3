import Vue from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
Vue.use({ VueperSlides, VueperSlide });
Vue.component("vueper-slides", VueperSlides);
Vue.component("vueper-slide", VueperSlide);
