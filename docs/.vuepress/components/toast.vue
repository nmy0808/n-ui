<template>
  <div>
    <div class='section' ref='section' id='section'>
      <n-button primary @click='onClick'>简单提示</n-button>
      <n-button primary @click='onClick2'>支持html</n-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import plugins from '../../../src/plugins/plugin';
import NButton from '../../../src/components/basic/button/Button.vue';

Vue.use(plugins);

export default {
  components: { NButton },
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$toast('这是一条消息提示');
    },
    onClick2() {
      this.$toast({
        content: '<a href="#">这是一条消息提示,这是一条消息提示..</a>',
        duration: 2,
        closeBtn: '关闭',
        position: 'bottom',
        enabledHtml: true,
      });
    },
  },
};
</script>

<style scoped lang='scss'>
@import '//at.alicdn.com/t/font_2449846_2mycn710dfk.css';

.section {
  display: flex;
  flex-wrap: wrap;
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-between;
  .icon-item {
    cursor: pointer;
    flex-grow: 1;
    width: 20%;
    height: 8em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    transition: all 0.1s;
    @media all and (max-width: 967px) {
      width: 30%;
    }

    .n-icon {
      font-size: 24px;
      user-select: none;
    }

    &:hover {
      background: rgba(204, 204, 204, 0.24);
    }
  }
}

.n-button {
  margin: 0.4em;
}
</style>
