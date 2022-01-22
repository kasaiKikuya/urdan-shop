<template>
  <div id="main_app" class="">
    <!-- slide -->
    <div class="slider-area">
      <div class="slider-active swiper-container">
        <SlideArea />
      </div>
    </div>

    <!-- banner -->
    <BannerArea />

    <!-- service -->
    <ServiceArea />

    <!-- slide product -->
    <SlideProduct />

    <!-- banner sale -->
    <BannerSale />

    <!-- prodcut current -->
    <ProductCurrent />

    <!-- Blog -->
    <BlogArea />
  </div>
</template>

<script>
import SlideArea from "@/components/Home/SlideArea.vue";
import BannerArea from "@/components/Home/BannerArea.vue";
import ServiceArea from "@/components/Home/ServiceArea.vue";
import SlideProduct from "@/components/Home/SlideProduct.vue";
import BannerSale from "@/components/Home/BannerSale.vue";
import ProductCurrent from "@/components/Home/ProductCurrent.vue";
import BlogArea from "@/components/Home/BlogArea.vue";

export default {
  name: "Home",
  components: {
    SlideArea,
    BannerArea,
    ServiceArea,
    SlideProduct,
    BannerSale,
    ProductCurrent,
    BlogArea,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
