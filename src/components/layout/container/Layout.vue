<template>
  <div class="layout-container" :class="{ 'layout-has-sider': hasSider }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NLayout',
  data() {
    return {
      hasSider: false,
    };
  },
  mounted() {
    this.$children.forEach((child) => {
      if (child.$options.name === 'NSider') {
        this.hasSider = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.layout-container {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.layout-has-sider {
  flex-direction: row;
}
</style>
