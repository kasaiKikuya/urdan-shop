<template>
  <div class="product-area pb-95">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="home-single-product-img">
            <a :href="dataProductCurrent.linkProduct"
              ><img
                :src="`${require('@/assets/images/' +
                  dataProductCurrent.image)}`"
                alt=""
            /></a>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="home-single-product-content">
            <h2>{{ dataProductCurrent.name }}</h2>
            <h3>{{ dataProductCurrent.price }}</h3>
            <p>{{ dataProductCurrent.description }}</p>
            <!-- <div class="product-color">
              <span>Color :</span>
              <ul>
                <li><a title="Pink" class="pink" href="#">pink</a></li>
                <li><a title="Yellow" class="yellow" href="#">yellow</a></li>
                <li><a title="Purple" class="purple" href="#">purple</a></li>
              </ul>
            </div> -->
            <div class="product-details-action-wrap mt-3">
              <div class="product-quality">
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  max="5"
                  class="cart-plus-minus-box input-text qty text"
                  name="qtybutton"
                  value="1"
                />
              </div>
              <div class="single-product-cart btn-hover btnAddCustom">
                <a href="#">Add to cart</a>
              </div>
              <div class="single-product-wishlist">
                <a title="Wishlist" href="wishlist.html"
                  ><i class="pe-7s-like"></i
                ></a>
              </div>
              <div class="single-product-compare">
                <a title="Compare" href="#"><i class="pe-7s-shuffle"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCurrent",
  data() {
    return {
      dataProductCurrent: {
        id: 1,
        linkProduct: "#",
        image: "product/single-product-2.png",
        name: "Modern Sofa Set",
        price: "200,000,000VND",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore mt aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
      },
    };
  },
};
</script>

<style scoped>
.single-product-cart > a {
  border-radius: 36px;
  padding: 13px 38px;
}
.btn-hover a::after,
.btn-hover button::after {
  border-radius: 36px;
}
.product-quality {
  border-radius: 10px;
}
.product-quality > input {
  height: 46px;
}
</style>
