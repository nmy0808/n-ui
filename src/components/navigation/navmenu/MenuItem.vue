<template>
  <div
    class="menu-item-container"
    :class="{ active: active }"
    @click="handleChangeIndex"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ['eventBus'],
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
  width: 8em;
  user-select: none;
  cursor: pointer;
  text-align: center;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  &.active {
    color: #3b73fb;
    border-bottom: 1px solid #3b73fb;
  }
  &:hover {
    color: #3b73fb;
    background: #f1f1f1;
  }
}
</style>