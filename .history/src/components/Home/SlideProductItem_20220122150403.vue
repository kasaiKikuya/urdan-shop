<template>
  <swiper-slide>
    <div class="product-wrap">
      <div class="product-img img-zoom mb-25">
        <a :href="dataProduct.linkProduct">
          <img :src="`${require('../../assets/images/'+ dataProduct.image)}`" alt="" />
        </a>
        <div class="product-badge badge-top badge-right badge-pink">
          <span>{{dataProduct.percentSale}}</span>
        </div>
        <div class="product-action-wrap">
          <button class="product-action-btn-1" title="Wishlist">
            <i class="pe-7s-like"></i>
          </button>
          <button
            class="product-action-btn-1"
            title="Quick View"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i class="pe-7s-look"></i>
          </button>
        </div>
        <div class="product-action-2-wrap">
          <button class="product-action-btn-2" title="Add To Cart">
            <i class="pe-7s-cart"></i> Add to cart
          </button>
        </div>
      </div>
      <div class="product-content">
        <h3><a :href="dataProduct.linkProduct">{{dataProduct.name}}</a></h3>
        <div class="product-price">
          <span class="old-price">{{dataProduct.oldPrice}}</span>
          <span class="new-price">{{dataProduct.newPrice}}</span>
        </div>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  name: "SlideProductItem",
  props: ["dataProduct"],
};
</script>

<style scoped></style>
