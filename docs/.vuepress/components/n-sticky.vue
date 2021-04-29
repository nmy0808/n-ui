<template>
  <div style="margin-top: 2em">
    <n-sticky :distance="58">
      <div style="width: 300px; height: 100px; background: #eff1f4;line-height:100px; text-align: center;">粘滞组件1</div>
    </n-sticky>
  </div>
</template>

<script>
import NSticky from '../../../src/components/navigation/sticky/Sticky.vue';

export default {
  components: { NSticky },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='scss' >
@import url('//at.alicdn.com/t/font_2449846_m1f2230a1zk.css');
</style>
