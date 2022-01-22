<template>
  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
    <div class="service-wrap-2 text-center mb-30">
      <div class="service-img-2">
        <img
          :src="`${require('@/assets/images/icon-img/' + dataService.image)}`"
          alt=""
        />
      </div>
      <div class="service-content-2">
        <h3>{{ dataService.name }}</h3>
        <p>{{ dataService.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceAreaItem",
  props: ["dataService"],
};
</script>

<style scoped></style>
