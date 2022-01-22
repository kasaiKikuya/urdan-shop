<template>
  <swiper class="swiper swiper-wrapper" :options="slideOption">
    <SlideAreaItem v-for="item in dataSlideAreaItem" :key="item.id" :dataItem="item" />
    <div
      class="swiper-button-customer swiper-button-prev swiper-button-black"
      slot="button-prev"
    ></div>
    <div
      class="swiper-button-customer swiper-button-next swiper-button-black"
      slot="button-next"
    ></div>
  </swiper>
</template>

<script>
import SlideAreaItem from "@/components/Home/SlideAreaItem.vue";

export default {
  name: "SlideArea",
  components: { SlideAreaItem },
  data() {
    return {
      slideOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      },
      dataSlideAreaItem: [
        {
          id: 1,
          image: "slider-bg-3.jpg",
          subText: "Up To 40% Off",
          mainText: "Summer <br />Collection",
          linkButton: "#",
          textButton: "Shop NSow",
        },
        {
          id: 2,
          image: "slider-bg-3-2.jpg",
          subText: "Up To 40% Off",
          mainText: "Summer <br />Collection",
          linkButton: "#",
          textButton: "Shop NSow",
        },
      ],
    };
  },
};
</script>

<style></style>
