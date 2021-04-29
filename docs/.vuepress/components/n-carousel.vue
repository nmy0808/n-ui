<template>
  <div class="box" style="margin-top: 2em;">
    <n-carousel initial-index="b" :autoplay="false">
      <n-carousel-item class="item" name="a" key="0">1</n-carousel-item>
      <n-carousel-item class="item" name="b" key="1">2</n-carousel-item>
      <n-carousel-item class="item" name="c" key="2">3</n-carousel-item>
      <n-carousel-item class="item" name="d" key="3">4</n-carousel-item>
    </n-carousel>
  </div>
</template>

<script>

import NCarousel from '../../../src/components/other/carousel/Carousel.vue';
import NCarouselItem from '../../../src/components/other/carousel/CarouselItem.vue';

export default {
  components: {  NCarousel, NCarouselItem },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
@import url('//at.alicdn.com/t/font_2449846_m1f2230a1zk.css');
.item{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: lightslategray;
}
</style>
