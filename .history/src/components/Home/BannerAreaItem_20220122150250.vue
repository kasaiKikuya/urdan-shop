<template>
  <div class="col-lg-6 col-md-6 col-12">
    <div class="banner-wrap mb-30">
      <a href="product-details.html"
        ><img :src="`${require('../../assets/images/banner/'+dataBanner.image)}`" alt=""
      /></a>
      <div class="banner-content-5">
        <span>{{dataBanner.subText}}</span>
        <h2>{{dataBanner.mainText}}</h2>
        <div class="btn-style-3 btn-hover">
          <a class="btn hover-border-radius" :href="dataBanner.linkButton"
            >{{dataBanner.textButton}}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerAreaItem",
  props: ["dataBanner"],
};
</script>

<style scoped></style>
