<template>
  <header class="header-area header-responsive-padding header-height-1">
    <div class="header-top d-none d-lg-block bg-gray">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-6">
            <div class="welcome-text">
              <p>Hello, wellcome to urdan shop!</p>
            </div>
          </div>
          <div class="col-lg-6 col-6">
            <div class="language-currency-wrap">
              <div class="currency-wrap border-style">
                <a class="currency-active" href="#"
                  >VNĐ(VN)<i class="ti-angle-down"></i
                ></a>
                <div class="currency-dropdown">
                  <ul>
                    <li><a href="#">$(US) </a></li>
                    <li><a href="#">Riyal (SAR) </a></li>
                    <li><a href="#">Rupee (INR) </a></li>
                  </ul>
                </div>
              </div>
              <div
                class="language-wrap"
                @click="isShowCountry = !isShowCountry"
              >
                <a class="language-active" href="#"
                  ><img
                    class="icon_flag_country"
                    src="@/assets/images/icon-img/co_vietnam.png"
                    alt="" />
                  Việt nam <i class="ti-angle-down"></i
                ></a>
                <div class="language-dropdown" :class="{ show: isShowCountry }">
                  <ul>
                    <li>
                      <a href="#"
                        ><img
                          src="@/assets/images/icon-img/flag.png"
                          alt=""
                        />English
                      </a>
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="@/assets/images/icon-img/spanish.png"
                          alt=""
                        />Spanish</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="@/assets/images/icon-img/arabic.png"
                          alt=""
                        />Arabic
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom sticky-bar">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-6 col-6">
            <div class="logo">
              <a href="index.html"
                ><img src="@/assets/images/logo/logo.png" alt="logo"
              /></a>
            </div>
          </div>
          <div class="col-lg-6 d-none d-lg-block">
            <div class="main-menu text-center">
              <nav>
                <ul>
                  <li>
                    <a href="index.html">HOME</a>
                    <ul class="sub-menu-style">
                      <li><a href="index.html">Home version 1 </a></li>
                      <li><a href="index-2.html">Home version 2</a></li>
                      <li><a href="index-3.html">Home version 3</a></li>
                      <li><a href="index-4.html">Home version 4</a></li>
                      <li><a href="index-5.html">Home version 5</a></li>
                      <li><a href="index-6.html">Home version 6</a></li>
                      <li><a href="index-7.html">Home version 7</a></li>
                      <li><a href="index-8.html">Home version 8</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop.html">SHOP</a>
                    <ul class="mega-menu-style mega-menu-mrg-1">
                      <li>
                        <ul>
                          <li>
                            <a class="dropdown-title" href="#">Shop Layout</a>
                            <ul>
                              <li><a href="shop.html">standard style</a></li>
                              <li>
                                <a href="shop-sidebar.html"
                                  >shop grid sidebar</a
                                >
                              </li>
                              <li>
                                <a href="shop-list.html">shop list style</a>
                              </li>
                              <li>
                                <a href="shop-list-sidebar.html"
                                  >shop list sidebar</a
                                >
                              </li>
                              <li>
                                <a href="shop-right-sidebar.html"
                                  >shop right sidebar</a
                                >
                              </li>
                              <li>
                                <a href="shop-location.html">store location</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a class="dropdown-title" href="#"
                              >Products Layout</a
                            >
                            <ul>
                              <li>
                                <a href="product-details.html">tab style 1</a>
                              </li>
                              <li>
                                <a href="product-details-2.html">tab style 2</a>
                              </li>
                              <li>
                                <a href="product-details-gallery.html"
                                  >gallery style
                                </a>
                              </li>
                              <li>
                                <a href="product-details-affiliate.html"
                                  >affiliate style</a
                                >
                              </li>
                              <li>
                                <a href="product-details-group.html"
                                  >group style</a
                                >
                              </li>
                              <li>
                                <a href="product-details-fixed-img.html"
                                  >fixed image style
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="shop.html"
                              ><img
                                src="@/assets/images/banner/menu.png"
                                alt=""
                            /></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">PAGES</a>
                    <ul class="sub-menu-style">
                      <li><a href="about-us.html">about us </a></li>
                      <li><a href="cart.html">cart page</a></li>
                      <li><a href="checkout.html">checkout </a></li>
                      <li><a href="my-account.html">my account</a></li>
                      <li><a href="wishlist.html">wishlist </a></li>
                      <li><a href="compare.html">compare </a></li>
                      <li><a href="contact-us.html">contact us </a></li>
                      <li>
                        <a href="login-register.html">login / register </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">BLOG</a>
                    <ul class="sub-menu-style">
                      <li><a href="blog.html">blog standard </a></li>
                      <li><a href="blog-sidebar.html">blog sidebar</a></li>
                      <li><a href="blog-details.html">blog details</a></li>
                    </ul>
                  </li>
                  <li><a href="about-us.html">ABOUT</a></li>
                  <li><a href="contact-us.html">CONTACT US</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-6">
            <div class="header-action-wrap">
              <div class="header-action-style header-search-1">
                <a class="search-toggle" href="#">
                  <i class="pe-7s-search s-open"></i>
                  <i class="pe-7s-close s-close"></i>
                </a>
                <div class="search-wrap-1">
                  <form action="#">
                    <input placeholder="Search products…" type="text" />
                    <button class="button-search">
                      <i class="pe-7s-search"></i>
                    </button>
                  </form>
                </div>
              </div>
               <div class="header-action-style">
                 <router-link to="/admin"><i class="pe-7s-user"></i>
                 </router-link>              
              </div>
              <div class="header-action-style">
                <a title="Wishlist" href="wishlist.html"
                  ><i class="pe-7s-like"></i
                ></a>
              </div>
              <div class="header-action-style header-action-cart">
                <a class="cart-active" href="#"
                  ><i class="pe-7s-shopbag"></i>
                  <span class="product-count bg-black">01</span>
                </a>
              </div>
              <div class="header-action-style d-block d-lg-none">
                <a class="mobile-menu-active-button" href="#"
                  ><i class="pe-7s-menu"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isShowCountry: false,
    };
  },
};
</script>

<style scoped>
.icon_flag_country {
  width: 16px;
  height: 100%;
}

.language-currency-wrap .language-wrap .language-dropdown.show {
  display: block;
  height: 133px;
  transition: all 0.5s;
}
</style>
