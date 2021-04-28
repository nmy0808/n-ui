<template>
  <div>
    <div class="section">
      <n-button
        icon="i-arrowright"
        :loading="loading2"
        position="left"
        @click="loading2 = !loading2"
        >{{ loading2 ? '加载中' : '提交' }}</n-button
      >
      <n-button icon="i-search">按钮</n-button>
      <n-button position="right" icon="i-plus">按钮</n-button>
      <n-button disable>禁用按钮</n-button>

    </div>
    <div class="section">
      <n-button gray>灰色按钮</n-button>
      <n-button dark>深色按钮</n-button>
      <n-button success>成功按钮</n-button>
      <n-button danger>危险按钮</n-button>
      <n-button warn>警告按钮</n-button>
      <n-button primary>主题按钮</n-button>
    </div>
  </div>
</template>

<script>
import NButton from '../../../src/components/basic/button/Button.vue';
import NButtonGroup from '../../../src/components/basic/button/ButtonGroup.vue';
import NIcon from '../../../src/components/basic/icon/Icon.vue';

// import NButton from '@/components/basic/button/Button.vue';
export default {
  components: { NButtonGroup, NButton, NIcon },
  data() {
    return {
      loading: true,
      loading2: true,
    };
  },
  methods: {
    handleClick() {
      this.loading = !this.loading;
    },
  },
};
</script>

<style scoped lang="scss">
@import url('//at.alicdn.com/t/font_2449846_m1f2230a1zk.css');
.section {
  display: flex;
  flex-wrap: wrap;
  &:first-child{
    margin-top: 2em;
  }
}
.n-button {
  margin: 0.4em;
}
</style>