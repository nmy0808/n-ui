<template>
  <div>
    <div class="section">
      <n-button-group>
        <n-button>选项一</n-button>
        <n-button>选项二</n-button>
        <n-button>选项三</n-button>
        <n-button>选项四</n-button>
      </n-button-group>
    </div>
    <div class="section">
      <n-button-group :border="false">
        <n-button>选项一</n-button>
        <n-button>选项二</n-button>
        <n-button>选项三</n-button>
        <n-button>选项四</n-button>
      </n-button-group>
    </div>
     <div class="section">
      <n-button-group>
        <n-button>选项一</n-button>
        <n-button>选项二</n-button>
        <n-button>选项三</n-button>
        <n-button disable>选项四</n-button>
      </n-button-group>
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
// @import url('//at.alicdn.com/t/font_2449846_m1f2230a1zk.css');
.section {
  &:nth-child(1){
    margin-top: 2em;
  }
  &:nth-child(2){
    margin: 1em 0;
  }
  &:nth-child(3){
    margin-top: 2em;
  }
}
</style>