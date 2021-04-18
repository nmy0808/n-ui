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
  name: 'MenuItem',
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
      while (parent.$options.name === 'SubMenu') {
        parent.active = true;
        parent = parent.$parent;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-item-container {
  width: 100%;
  user-select: none;
  cursor: pointer;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  &.active:not(.vertical) {
    color: #3b73fb;
    border-bottom: 1px solid #3b73fb;
  }
  &.active {
    color: #3b73fb;
    background: #efefef;
  }
  &:hover {
    color: #3b73fb;
    background: #f1f1f1;
  }
  &.vertical {
    justify-content: left;
  }
}
</style>