<template>
  <div class="banner-area pt-100 pb-70">
    <div class="container">
      <div class="row">
        <BannerAreaItem v-for="item in dataBanner" :key="item.id" :dataBanner="item" />
      </div>
    </div>
  </div>
</template>

<script>
import BannerAreaItem from "@/components/Home/BannerAreaItem.vue";

export default {
  name: "BannerArea",
  components: { BannerAreaItem },
  data() {
    return {
      dataBanner: [
        {
          id: 1,
          image: "banner-6.png",
          subText: "Up To 40% Off",
          mainText: "Dining Furniture",
          linkButton: "#",
          textButton: "Shop Now",
        },
        {
          id: 2,
          image: "banner-7.png",
          subText: "Up To 40% Off",
          mainText: "Bed Furniture",
          linkButton: "#",
          textButton: "Shop Now",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
