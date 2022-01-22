<template>
  <div class="service-area pb-65">
    <div class="container">
      <div class="row">
        <ServiceAreaItem v-for="item in dataService" :key="item.id" :dataService="item" />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceAreaItem from "@/components/Home/ServiceAreaItem.vue";

export default {
  name: "ServiceArea",
  components: { ServiceAreaItem },
  data() {
    return {
      dataService: [
        {
          id: 1,
          image: "car.png",
          name: "Free Shipping",
          description:
            "Lorem ipsum dolor sit amet conse adipisicing elit sed do.",
        },
        {
          id: 2,
          image: "time.png",
          name: "Support 24/7",
          description:
            "Lorem ipsum dolor sit amet conse adipisicing elit sed do.",
        },
        {
          id: 3,
          image: "dollar.png",
          name: "Money Return",
          description:
            "Lorem ipsum dolor sit amet conse adipisicing elit sed do.",
        },
        {
          id: 4,
          image: "discount.png",
          name: "Order Discount",
          description:
            "Lorem ipsum dolor sit amet conse adipisicing elit sed do.",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
