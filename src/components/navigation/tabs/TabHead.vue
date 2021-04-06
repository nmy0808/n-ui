<template>
  <div class="tabs-head-container">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="btn-wrapper" @click="handleTabClick">
      <slot name="tabBarExtraContent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsHead',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (vm) => {
      const left = vm.$el.offsetLeft;
      const width = vm.$el.offsetWidth;
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left}px`;
    });
  },
  methods: {
    handleTabClick(e) {
      this.eventBus.$emit('tabClick', e);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-head-container {
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #999;
  position: relative;
  .line {
    position: absolute;
    bottom: 0;
    height: 1px;
    background: #3584fc;
    transition: all 0.1s;
  }
  .btn-wrapper {
    margin-left: auto;
  }
}
</style>
