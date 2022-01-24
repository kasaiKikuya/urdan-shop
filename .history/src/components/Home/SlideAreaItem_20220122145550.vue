<template>
  <swiper-slide>
    <div class="swiper-slide">
      <div
        class="intro-section slider-height-1 slider-content-center bg-img single-animation-wrap slider-bg-color-3"
        :style="{
          backgroundImage:
            'url(' + require('@/assets/images/slider/' + dataItem.image) + ')',
        }"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 hm2-slider-animation">
              <div class="slider-content-2 slider-animated-3">
                <h3 class="animated">{{ dataItem.mainText }}</h3>
                <h1 class="animated">{{ dataItem.subText }}</h1>
                <div class="slider-btn-2 btn-hover">
                  <a
                    :href="dataItem.linkButton"
                    class="btn hover-border-radius theme-color animated"
                  >
                    {{ dataItem.textButton }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  name: "SlideAreaItem",
  props: ["dataItem"],
};
</script>

<style scoped></style>
