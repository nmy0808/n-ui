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
    });
  },
  methods: {
    handleChangeIndex() {
      this.eventBus.$emit('update:selectedIndex', this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-item-container {
  text-align: center;
  height: 2em;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  &.active {
    background: #f1f1f1;
    color: #3b73fb;
  }
}
</style>