<template>
  <div class="submenu-container">
    <div class="submenu-title">
      <slot name="title"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ['eventBus'],
  name: 'SubMenu',
  props: {
    index: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.submenu-container {
  text-align: center;
  flex: 1;
  background: white;
  .submenu-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2em;
  }
}
</style>