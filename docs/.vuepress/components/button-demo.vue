<template>
  <div>
    <n-button></n-button>
    <n-button icon="i-search">按钮按钮</n-button>
    <n-button @click="handleClick" position="right" icon="i-setup">
      按钮
    </n-button>
    <n-button-group>
      <n-button icon="i-arrowleft">前进</n-button>
      <n-button>随便</n-button>
      <n-button icon="i-arrowright" position="right">后退</n-button>
    </n-button-group>
    <n-button-group>
      <n-button icon="i-arrowleft">前进</n-button>
      <n-button icon="i-arrowright" position="right">后退</n-button>
    </n-button-group>
    <n-button icon="i-arrowright" :loading="true" position="right"
      >后退</n-button
    >
    <n-button
      icon="i-arrowright"
      :loading="loading"
      position="left"
      @click="loading = !loading"
      >提交</n-button
    >
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
    };
  },
  methods: {
    handleClick() {
      this.loading = !this.loading;
    },
  },
};
</script>

<style >
@import url('//at.alicdn.com/t/font_2449846_sq4i7gxgce.css');
</style>