<template>
  <div
    class="menu-item-container"
    :class="{ active: active, vertical }"
    @click="handleChangeIndex"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ['eventBus', 'vertical'],
  name: 'NMenuItem',
  props: {
    index: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
      selectedIndex: [],
    };
  },
  mounted() {
    this.eventBus.$on('add:selectedIndex', (selectedIndex) => {
      this.selectedIndex = selectedIndex;
      this.active = selectedIndex.includes(this.index);
      if (this.active) {
        this.setSubMenuState();
      }
    });
  },
  methods: {
    handleChangeIndex() {
      // 清空所有subMenu的激活状态
      this.eventBus.$emit('delete:active');
      if (!this.vertical) {
        this.eventBus.$emit('delete:show');
      }
      this.eventBus.$emit('update:selectedIndex', this.index);
    },
    setSubMenuState() {
      let parent = this.$parent;
      while (parent.$options.name === 'NSubMenu') {
        parent.active = true;
        parent = parent.$parent;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/var.scss';
.menu-item-container {
  font-size: $base-size  + 2px;
  width: 100%;
  user-select: none;
  cursor: pointer;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  &.active:not(.vertical) {
    color: $primary;
    border-bottom: 1px solid $primary;
  }
  &.active {
    font-weight: bold;
    color: $primary;
    background: #efefef;
  }
  &:hover {
    color: $primary;
    background: #f1f1f1;
  }
  &.vertical {
    justify-content: left;
  }
}
</style>