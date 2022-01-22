<template>
  <div class="product-area pb-95">
    <div class="container">
      <div class="section-border section-border-margin-1">
        <div class="section-title-timer-wrap bg-white">
          <div class="section-title-1">
            <h2>Deal Of The Day</h2>
          </div>
          <div id="timer-1-active" class="timer-style-1">
            <span class="py-2">End In: 24/1/2022</span>
          </div>
        </div>
      </div>
      <div class="product-slider-active-1 swiper-container">
        <swiper class="swiper swiper-wrapper" :options="slideProductOptions">
          <SlideProductItem
            v-for="item in dataProduct"
            :key="item.id"
            :dataProduct="item"
          />
          <div
            class="swiper-button-customer swiper-button-prev swiper-button-black"
            slot="button-prev"
          ></div>
          <div
            class="swiper-button-customer swiper-button-next swiper-button-black"
            slot="button-next"
          ></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import SlideProductItem from "@/components/Home/SlideProductItem.vue";

export default {
  name: "SlideProduct",
  components: { SlideProductItem },
  data() {
    return {
      slideProductOptions: {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      },
      dataProduct: [
        {
          id: 1,
          image: "product/product-1.png",
          linkProduct: "#",
          percentSale: "-10%",
          name: "New Modern Sofa Set",
          oldPrice: "50,000 VND",
          newPrice: "20,000 VND",
        },
        {
          id: 2,
          image: "product/product-2.png",
          linkProduct: "#",
          percentSale: "10%",
          name: "New Modern Sofa Set",
          oldPrice: "50,000 VND",
          newPrice: "20,000 VND",
        },
        {
          id: 3,
          image: "product/product-3.png",
          linkProduct: "#",
          percentSale: "10%",
          name: "New Modern Sofa Set",
          oldPrice: "50,000 VND",
          newPrice: "20,000 VND",
        },
        {
          id: 4,
          image: "product/product-4.png",
          linkProduct: "#",
          percentSale: "10%",
          name: "New Modern Sofa Set",
          oldPrice: "50,000 VND",
          newPrice: "20,000 VND",
        },
        {
          id: 5,
          image: "product/product-5.png",
          linkProduct: "#",
          percentSale: "10%",
          name: "New Modern Sofa Set",
          oldPrice: "50,000 VND",
          newPrice: "20,000 VND",
        },
      ],
    };
  },
};
</script>

<style scoped>
.section-border-margin-1 {
  margin: 0;
}
</style>
