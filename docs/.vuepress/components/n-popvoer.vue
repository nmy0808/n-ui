<template>
  <div style="margin-top: 2em">
    <div class="section">
      <n-popover trigger="click" position="bottom">
      <template #content>
        <div>
          我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
        </div>
      </template>
      <n-button>鼠标点击</n-button>
    </n-popover>
    <n-popover trigger="click" position="top">
      <template #content>
        <div>
          我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
        </div>
      </template>
      <n-button>鼠标点击</n-button>
    </n-popover>
    <n-popover trigger="click" position="left">
      <template #content>
        <div>
          我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
        </div>
      </template>
      <n-button>鼠标点击</n-button>
    </n-popover>
    <n-popover trigger="click" position="right">
      <template #content>
        <div>
          我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
        </div>
      </template>
      <n-button>鼠标点击</n-button>
    </n-popover>
    </div>
    <div class="section" style="margin-top: 1em;">
      <n-popover trigger="hover" position="bottom">
      <template #content>
        <div>
          我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
        </div>
      </template>
      <n-button>鼠标经过</n-button>
    </n-popover>
    <n-popover trigger="hover" position="top">
      <template #content>
        <div>
          我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
        </div>
      </template>
      <n-button>鼠标经过</n-button>
    </n-popover>
    <n-popover trigger="hover" position="left">
      <template #content>
        <div>
          我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
        </div>
      </template>
      <n-button>鼠标经过</n-button>
    </n-popover>
    <n-popover trigger="hover" position="right">
      <template #content>
        <div>
          我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
        </div>
      </template>
      <n-button>鼠标经过</n-button>
    </n-popover>
    </div>
  </div>
</template>

<script>
import NButton from '../../../src/components/basic/button/Button.vue';
import NPopover from '../../../src/components/viewport/popover/Popover.vue';

export default {
  components: { NButton, NPopover },
  data() {
    return {
      selected: 'tab2',
    };
  },
  methods: {
    tabClick() {
      this.$toast('回调哦!');
    },
  },
};
</script>

<style lang='scss' >
@import url('//at.alicdn.com/t/font_2449846_m1f2230a1zk.css');
.tab-body {
  height: 10em;
}
</style>
