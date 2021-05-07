<template>
  <div style="margin-top: 1em">
    <n-button @click="onClick" primary>点击</n-button>
    <n-button @click="onClick2" success>点击</n-button>
    <n-button @click="onClick3" danger>点击</n-button>
    <n-button @click="onClick4" warn>点击</n-button>
  </div>
</template>

<script>
import Vue from 'vue';
import message from '../../../src/plugins/message';
import NButton from '../../../src/components/basic/button/Button.vue';
Vue.use(message);
export default {
  components: {
    NButton,
  },
  methods: {
    onClick() {
      this.$message({ content: '消息提示', duration: '3000' });
    },
    onClick2() {
      this.$message({ content: '消息提示', duration: '3000', success: true });
    },
    onClick3() {
      this.$message({ content: '消息提示', duration: '3000', danger: true });
    },
    onClick4() {
      this.$message({ content: '消息提示', duration: '3000', warn: true });
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
