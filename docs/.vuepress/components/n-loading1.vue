<template>
  <div style="margin-top: 1em">
    <n-button @click="onClick" primary>显示加载</n-button>
  </div>
</template>

<script>
import Vue from 'vue';
import loading from '../../../src/plugins/loading';
import NButton from '../../../src/components/basic/button/Button.vue';
Vue.use(loading);
export default {
  components: {
    NButton,
  },
  methods: {
    onClick() {
      this.$showLoading('加载中...');
      setTimeout(() => {
        this.$hideLoading();
      }, 2000);
    },
  },
};
</script>

<style lang='scss' >
@import url('//at.alicdn.com/t/font_2449846_vuahaq5toi.css');
.tab-body {
  height: 10em;
}
</style>
